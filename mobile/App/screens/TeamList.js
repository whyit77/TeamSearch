import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList
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
      // teamName: "",
      status: "Active", /////////////
      // creator: "",
      // size: 0,
      // subjectDescription: "",
      // userId: "5e7e46af4f99bb52f42369a4",
      joinedTeams: [],
      // createdTeams: [],
      teamId: "",
      count: 1,
      data: []
    };
  }

  async fetchUserTeams() {
    // TODO: GET CURRENT LOGGED IN USER //
    const userId = "5e815389f1088e659c4bddc4";

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
        userId: userId
      }
    };

    if (this.state.count == 1) {
      console.log("fetching...");

      fetch("http://192.168.1.9:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(async res => {
          const responseJson = await res.json();

          console.log(responseJson);
          console.disableYellowBox = true;


          if (res.ok) {
            console.log("Okay Fetched Teams");

            const joinedTeams = responseJson.data.getUser.joinedTeams;
            // const teamId = responseJson.data.getUser.joinedTeams
            // // const createdTeams = responseJson.data.getUser.createdTeams;

            // const teamName = responseJson.data.getUser.joinedTeams[1].teamName;
            // const subjectDescription =
            //   responseJson.data.getUser.joinedTeams[1].subjectDescription;
            // const creator =
            //   responseJson.data.getUser.joinedTeams[1].creator.username;

            // const members = responseJson.data.getUser.joinedTeams[1].members;
            // const size = members.length;

            // console.log("--------");
            // console.log(joinedTeams);

            const info = [];
            for (let i = 0; i < joinedTeams.length; i++) {
              info.push(joinedTeams[i]);
            }

            // if the user is not in any teams
            // if (joinedTeams.length == 0) {
            //   info.push()
            // }

            this.setState({
              // teamName: teamName,
              // subjectDescription: subjectDescription,
              // creator: creator,
              // size: size,
              // joinedTeams: joinedTeams,
              data: info
              // teamId:
              // createdTeams: createdTeams
            });

            return responseJson;
          }

          this.setState({ error: responseJson.errors[0].message });
          throw new Error(responseJson.error);
        })
        .catch(err => {
          console.log(err);
        });

      this.state.count = 2;
    }
  }

  componentDidMount() {
    //Here is the Trick
    // const { navigation } = this.props;
    this.fetchUserTeams();
    console.log("MOUNTED");
    const isFocused = this.props.navigation.isFocused();
    if (isFocused) {
      console.log("mount 2...");
      this.fetchUserTeams();
    }
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

  // componentWillUnmount() {
  //   // Remove the event listener before removing the screen from the stack
  //   this.focusListener.remove();
  // }

  // componentDidMount() {
  //   this.fetchUserTeams();
  //   console.log("MOUNTED");
  // }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.data !== this.state.data) {
    //   console.log("UPDATING...");
    //   this.fetchUserTeams();
    // }
    this.fetchUserTeams();
    console.log("upd");
    const isFocused = this.props.navigation.isFocused();
    if (isFocused) {
      console.log("UPDATING...");
      this.fetchUserTeams();
    }
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
            justifyContent: "flex-end"
          }}
          option1Click={() => {
            navigation.navigate("CreateTeam");
          }}
          option2Click={team => {
            navigation.navigate("TeamInfo", {
              teamId: team
            });
          }}
        />
      )
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
                    // onPress={() =>
                    //   this.props.navigation.navigate("TeamInfo", {
                    //     teamId: rowData._id
                    //   })
                    // }
                    onPress={() =>
                      this.props.navigation.navigate("TeamInfo", {
                        teamId: rowData._id,
                        refresh: this.fetchUserTeams()
                      })
                    }
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
          <Text style={mainStyle.bigText}>NOT IN ANY TEAMS</Text>
        )}

        {/* <View style={mainStyle.container}>
          <ScrollView contentContainerStyle={mainStyle.container}>
            <View style={mainStyle.toplevel}> */}
        {/* <TouchableOpacity onPress={this.handleSubmit()}> */}
        {/* <Team
                name={this.state.teamName}
                status={this.state.status}
                admin={this.state.creator}
                size={this.state.size}
                description={this.state.subjectDescription}
              /> */}
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={this.handleSubmit()}>
								<TeamListCard
									description={this.state.description}
								></TeamListCard>
							</TouchableOpacity> */}
        {/* </View>
          </ScrollView>
        </View> */}
      </SafeAreaView>
    );
  }
}
