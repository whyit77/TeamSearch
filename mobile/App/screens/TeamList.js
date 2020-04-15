import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { Team } from "../components/Team";
import { mainStyle } from "../styles/styles";
import CreateTeamMenuIcon from "../components/CreateTeamMenuIcon";
import { TeamListCard } from "../components/TeamListCard";

import { NavigationEvents } from "react-navigation";

export default class TeamList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Active", /////////////
      userId: "",
      joinedTeams: [],
      // createdTeams: [],
      teamId: "",
      count: 1,
      data: [],
    };
  }

  async fetchCurrentUser() {
    console.log("fetchCurrentUser");

    let requestBody = {
      query: `
        query {
          me {
            userId
            username
          }
        }
      `, // me query pulls first person in database
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          // set current logged in user in state
          const userId = responseJson.data.me.userId;

          this.setState({
            userId: userId,
          });

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // set currently selected team
  setTeam = (teamId) => {
    const userId = this.state.userId;

    let requestBody = {
      query: `
        mutation setTeam($userId: String!, $teamId: String!) {
          setTeam(userId: $userId, teamId: $teamId) {
            userId
            username
            teamId
          }
        }
      `,
      variables: {
        userId: userId,
        teamId: teamId,
      },
    };
    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          console.log("Okay CURRENT TEAM");
          this.props.navigation.navigate("TeamInfo");
          return responseJson;
        }

        this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async fetchUserTeams() {
    const userId = this.state.userId;
    console.log("fetchUserTeams");

    let requestBody = {
      query: `
		      query getUser($userId: String!) {
		        getUser(userId: $userId) {
              username
		          joinedTeams {
                _id
                teamName
                subjectDescription
                creator {
                  username
                }
                members {
                  username
                }
		          }
		        }
		      }
		    `,
      variables: {
        userId: userId,
      },
    };

    if (this.state.count == 1) {
      console.log("fetching...");

      fetch("http://192.168.1.9:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          const responseJson = await res.json();

          console.log(responseJson);
          console.disableYellowBox = true;

          if (res.ok) {
            console.log("Okay Fetched Teams");

            const joinedTeams = responseJson.data.getUser.joinedTeams;

            const info = [];
            for (let i = 0; i < joinedTeams.length; i++) {
              info.push(joinedTeams[i]);
            }

            this.setState({
              data: info,
            });

            return responseJson;
          }

          this.setState({ error: responseJson.errors[0].message });
          throw new Error(responseJson.error);
        })
        .catch((err) => {
          console.log(err);
        });

      this.state.count = 2;
    }
  }

  componentDidMount() {
    this.fetchCurrentUser(); // get logged in user
    // this.fetchUserTeams(); // populate team list
    console.log("MOUNTED");
    // const isFocused = this.props.navigation.isFocused();
    // if (isFocused) {
    //   console.log("mount 2...");
    //   this.fetchUserTeams();
    // }
    //Adding an event listner on focus
    //So whenever the screen will have focus it will set the state to zero
    // this.props.navigation.addListener(
    //   this.props.navigation.getParam("focused"),
    //   () => {
    //     this.fetchUserTeams();
    //     console.log("LISTENING");
    //   }
    // );
  }

  componentWillUnmount() {
    // Remove the event listener before removing the screen from the stack
    // this.focusListener.remove();
    console.log("unm");
  }

  // componentDidMount() {
  //   this.fetchUserTeams();
  //   console.log("MOUNTED");
  // }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.data !== this.state.data) {
    console.log("UPDATING...");
    this.fetchUserTeams(); // populate team list
    // }
    // if (prevState.data !== this.state.data) {
    //   console.log("UPDATING...");
    //   this.fetchUserTeams();
    // }
    // this.fetchUserTeams();
    // console.log("upd");
    // const isFocused = this.props.navigation.isFocused();
    // if (isFocused) {
    //   console.log("UPDATING...");
    //   this.fetchUserTeams();
    // }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <CreateTeamMenuIcon
          option1="Create Team"
          option2="Join Team"
          menuStyle={{
            marginRight: 40,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
          option1Click={() => {
            navigation.navigate("CreateTeam");
          }}
          option2Click={() => {
            navigation.navigate("TeamInfo");
          }}
          // option2Click={(team) => {
          //   navigation.navigate("TeamInfo", {
          //     teamId: team
          //   });
          // }}
        />
      ),
    };
  };

  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        {this.state.data.length != 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={({ item: rowData }) => {
              return (
                <TouchableOpacity>
                  <Team
                    onPress={() => this.setTeam(rowData._id)}
                    name={rowData.teamName}
                    status={this.state.status}
                    admin={rowData.creator.username}
                    size={rowData.members.length}
                    description={rowData.subjectDescription}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <Text style={mainStyle.bigText}>No Teams to Display</Text>
        )}
      </SafeAreaView>
    );
  }
}
