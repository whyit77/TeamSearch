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
    name: "",
    status: "",
    admin: "",
    size: "",
    description: "this is a description",
    userId: "5e7b28d09185c24b94beaa89",
    joinedTeams: [],
    createdTeams: [],
    count: 1
  };

  handleSubmit = () => {
    let requestBody = {
      query: `
		      query getUser($userId: String!) {
		        getUser(userId: $userId) {
		          joinedTeams {
		            teamName
		            searchDescription
		            subjectDescription
		          }
		          createdTeams {
		            teamName
		          }
		        }
		      }
		    `,
      variables: {
        userId: this.state.userId
      }
    };

    if (this.state.count == 1) {
      console.log("fetching...");

      fetch(`http://192.168.0.6:3000/graphql`, {
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
            // this.setState(initialState);
            return responseJson;
          }

          // this.setState(initialState);
          this.setState({ error: responseJson.errors[0].message });
          throw new Error(responseJson.error);
        })
        .catch(err => {
          console.log(err);
        });

      this.state.count = 2;
    }
  };

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
              <TouchableOpacity onPress={this.handleSubmit()}>
                <Team
                  name={"TeamSearch"}
                  status={"Active"}
                  admin={"Dr. Dan"}
                  size={20}
                  description={"Small boi"}
                ></Team>
              </TouchableOpacity>
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
