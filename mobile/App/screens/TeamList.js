import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Team } from "../components/Team";
import { mainStyle } from "../styles/styles";
import CreateTeamMenuIcon from "../components/CreateTeamMenuIcon";
import { TeamListCard } from "../components/TeamListCard";

export default class TeamList extends Component {
  state = {
    team: "",
    teamName: "",
    status: "Active", /////////////
    creator: "",
    size: "",
    description: "this is a description",
    userId: "5e7b28d09185c24b94beaa89",
    joinedTeams: [],
    // createdTeams: [],
    count: 1
  };

  // getUserTeams = () => {
  //   const userId = "5e8128507fa7512864614452";

  //   let requestBody = {
  //     query: `
  // 	      query getUser($userId: String!) {
  // 	        getUser(userId: $userId) {
  // 	          joinedTeams {
  // 	            _id
  // 	          }
  // 	          createdTeams {
  //               _id
  // 	          }
  // 	        }
  // 	      }
  // 	    `,
  //     variables: {
  //       userId: userId
  //     }
  //   };

  //   console.log("fetching...");
  //   // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
  //   fetch("http://192.168.1.12:3000/graphql", {
  //     method: "POST",
  //     body: JSON.stringify(requestBody),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(async res => {
  //       const responseJson = await res.json();

  //       console.log(responseJson);

  //       if (res.ok) {
  //         console.log("Okay Fetched Teams IDs");
  //         const joinedTeams = responseJson.data.getUser.joinedTeams;
  //         const createdTeams = responseJson.data.getUser.createdTeams;

  //         this.setState({
  //           joinedTeams: joinedTeams,
  //           createdTeams: createdTeams
  //         });

  //         return responseJson;
  //       }

  //       throw new Error(responseJson.error);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  async componentDidMount() {
    // this.getUserTeams();
    const userId = "5e8128507fa7512864614452";
    // const teamId = this.state.createdTeams[0]._id;
    // console.log("HELJLKJDFLJAOIDF");
    // console.log(this.state.createdTeams);

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
		          }
		        }
		      }
		    `,
      variables: {
        userId: userId
      }
    };
    // let requestBody = {
    //   query: `
    //     query getTeam($teamId: String!) {
    //       getTeam(teamId: $teamId) {
    //         _id
    //         teamName
    //         subjectDescription
    //         creator {
    //           username
    //         }

    //       }
    //     }
    //   `,
    //   variables: {
    //     teamId: teamId
    //   }

    // query: `
    //     query getUser($userId: String!) {
    //       getUser(userId: $userId) {
    //         joinedTeams {
    //           teamName
    //           searchDescription
    //           subjectDescription
    //           creator {
    //             username
    //           }
    //         }
    //         createdTeams {
    //           teamName
    //           searchDescription
    //           subjectDescription
    //           creator {
    //             username
    //           }
    //         }
    //       }
    //     }
    //   `,
    // variables: {
    //   userId: userId
    // }
    // };

    if (this.state.count == 1) {
      console.log("fetching...");

      fetch("http://192.168.1.12:3000/graphql", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(async res => {
          const responseJson = await res.json();

          console.log(responseJson);

          if (res.ok) {
            console.log("Okay Fetched Teams");

            const joinedTeams = responseJson.data.getUser.joinedTeams;
            // const createdTeams = responseJson.data.getUser.createdTeams;

            const teamName = responseJson.data.getUser.joinedTeams[0].teamName;
            const subjectDescription =
              responseJson.data.getUser.joinedTeams[0].subjectDescription;
            const creator =
              responseJson.data.getUser.joinedTeams[0].creator.username;

            const size = "2000";

            this.setState({
              teamName: teamName,
              subjectDescription: subjectDescription,
              creator: creator,
              size: size,
              joinedTeams: joinedTeams
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

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
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
        />
      )
    };
  };
  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <View style={mainStyle.container}>
          <ScrollView contentContainerStyle={mainStyle.container}>
            <View style={mainStyle.toplevel}>
              {/* <TouchableOpacity onPress={this.handleSubmit()}> */}
              <Team
                name={this.state.teamName}
                status={this.state.status}
                admin={this.state.creator}
                size={this.state.size}
                description={this.state.subjectDescription}
              ></Team>
              {/* </TouchableOpacity> */}
              {/* <TouchableOpacity onPress={this.handleSubmit()}>
								<TeamListCard
									description={this.state.description}
								></TeamListCard>
							</TouchableOpacity> */}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
