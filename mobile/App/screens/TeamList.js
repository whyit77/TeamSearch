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

export default class TeamList extends Component {
  state = {
    // teamName: "",
    status: "Active", /////////////
    // creator: "",
    // size: 0,
    // subjectDescription: "",
    // userId: "5e7e46af4f99bb52f42369a4",
    joinedTeams: [],
    // createdTeams: [],
    count: 1,
    data: []
  };

  componentDidMount() {
    // TODO: GET CURRENT LOGGED IN USER //
    const userId = "5e8128507fa7512864614452";

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
            // console.log("======");
            // console.log(info);

            this.setState({
              // teamName: teamName,
              // subjectDescription: subjectDescription,
              // creator: creator,
              // size: size,
              // joinedTeams: joinedTeams,
              data: info
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

        <FlatList
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TeamInfo")}
                // TODO: NEED TO PASS SELECTED TEAM ID TO teamInfo page //
              >
                {/* <Text style={mainStyle.text}>{rowData}</Text> */}
                <Team
                  name={rowData.teamName}
                  status={this.state.status}
                  admin={rowData.creator.username}
                  size={rowData.members.length}
                  description={rowData.subjectDescription}
                />
                {/* <Team
                name={this.state.teamName}
                status={this.state.status}
                admin={this.state.creator}
                size={this.state.size}
                description={this.state.subjectDescription}
              /> */}
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
        />

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
