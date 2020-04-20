import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextField } from "../components/Form";
import { mainStyle, formStyle } from "../styles/styles";

import { StackActions } from "@react-navigation/native";
import { NavigationActions } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default ({ navigation }) => (

export default class App extends React.Component {
  // static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.state = {
      // teamId: this.props.navigation.getParam("teamId"),
      teamId: "",
      teamName: "",
      searchDescription: "",
      subjectDescription: "",
      radius: "",
      code: "",
      creator: "",
    };
  }

  async fetchCurrentTeam() {
    let requestBody = {
      query: `
        query {
          me {
            userId
            username
            teamId
          }
        }
      `, // me query pulls first person in database
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.8:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        // if (res.status !== 200 && res.status !== 201) {
        //   throw new Error("Failed!");
        // }

        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          // set currently selected team in state
          const teamId = responseJson.data.me.teamId;

          this.setState({
            teamId: teamId,
          });

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchTeam() {
    // TODO: GET CURRENT TEAM (just made or selected from list) // done
    // const teamId = "5e8128d77fa7512864614453";
    const teamId = this.state.teamId;

    let requestBody = {
      query: `
          query getTeam($teamId: String!) {
            getTeam(teamId: $teamId) {
              _id
              teamName
              code
              searchDescription
              subjectDescription
              radius
              creator {
                username
              }
            }
          }`,
      variables: {
        teamId: teamId,
      },
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.8:3000/graphql", {
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
          const teamName = responseJson.data.getTeam.teamName;
          const searchDescription = responseJson.data.getTeam.searchDescription;
          const subjectDescription =
            responseJson.data.getTeam.subjectDescription;
          const radius = responseJson.data.getTeam.radius;
          const code = responseJson.data.getTeam.code;
          const creator = responseJson.data.getTeam.creator;

          this.setState({
            teamName: teamName,
            searchDescription: searchDescription,
            subjectDescription: subjectDescription,
            radius: radius,
            code: code,
            creator: creator,
          });

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchCurrentTeam(); // get currently selected team
    console.log("mount");
    // const isFocused = this.props.navigation.isFocused();
    // if (isFocused) {
    //   console.log("mount 2...");
    //   this.fetchCurrentTeam();
    // }
  }

  componentWillUnmount() {
    console.log("unmount");
    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: "TeamList" })]
    // });
    // this.props.navigation.dispatch(resetAction);
    // this.props.navigation.getParam("refresh");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.teamId !== this.state.teamId) {
      console.log("UPDATING...");
      this.fetchTeam();
    }
    // this.fetchTeam();
    // console.log("update");
  }

  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <KeyboardAvoidingView
          style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
          behavior="padding"
          enabled
        >
          <ScrollView contentContainerStyle={formStyle.formContainer}>
            <View style={(formStyle.formContainer, { paddingVertical: 20 })}>
              <Text style={formStyle.label}>Team Name: </Text>
              <TextField editable={false}>
                <Text style={formStyle.fillInText}>{this.state.teamName}</Text>
              </TextField>

              {/* <Text style={formStyle.fillInText}>{this.state.teamName}</Text> */}

              <Text style={formStyle.label}>Code: </Text>
              {/* <Text style={formStyle.fillInText}>{this.state.code}</Text> */}
              <TextField editable={false}>
                <Text style={formStyle.fillInText}>{this.state.code}</Text>
              </TextField>

              <Text style={formStyle.label}>Search Description: </Text>
              <TextField editable={false} multiline={true}>
                <Text style={formStyle.placeholderStyle}>
                  {this.state.searchDescription}
                </Text>
              </TextField>
              {/* <Text style={formStyle.fillInText}>{this.state.searchDescription}</Text> */}

              <Text style={formStyle.label}>Subject: </Text>
              <TextField editable={false} multiline={true}>
                <Text style={formStyle.placeholderStyle}>
                  {this.state.subjectDescription}
                </Text>
              </TextField>
              {/* <Text style={formStyle.fillInText}>{this.state.subjectDescription}</Text> */}

              <Text style={formStyle.label}>
                Search Radius:{" "}
                <Text style={formStyle.fillInText}>{this.state.radius}</Text>{" "}
                miles
              </Text>

              {/* 

              <Text style={formStyle.label}>Search Description</Text>
              <TextField placeholder="Description" editable={false}>
              <Text style={formStyle.fillInText}>{this.state.subjectDescription}</Text>
               </TextField> */}
            </View>
            <View>
              <View style={formStyle.buttons}>
                <TouchableOpacity
                  style={formStyle.formButton}
                  onPress={() => this.props.navigation.navigate("TeamAlerts")}
                >
                  <Text style={mainStyle.smallText}>Alerts</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
