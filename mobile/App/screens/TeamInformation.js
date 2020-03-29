import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextField } from "../components/Form";
import { mainStyle, formStyle } from "../styles/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

// export default ({ navigation }) => (

export default class App extends React.Component {
  // static contextType = AuthContext;

  state = {
    teamName: "",
    searchDescription: "",
    subjectDescription: "",
    radius: "",
    code: "",
    creator: ""
  };

  componentDidMount() {
    // TODO: GET CURRENT TEAM (just made or selected from list) //
    const teamId = "5e7f2597975c644820d3d66c";

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
        teamId: teamId
      }
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
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
            creator: creator
          });

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch(err => {
        console.log(err);
      });
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
            <View style={formStyle.formContainer}>
              <Text style={mainStyle.smallText}>{this.state.teamName}</Text>
              <Text style={mainStyle.smallText}>{this.state.code}</Text>
              <Text style={mainStyle.smallText}>
                {this.state.searchDescription}
              </Text>
              <Text style={mainStyle.smallText}>
                {this.state.subjectDescription}
              </Text>
              <Text style={mainStyle.smallText}>{this.state.radius}</Text>
              {/* <Text style={formStyle.label}>Search Description</Text>
              <TextField placeholder="Description" editable={false} />
              <Text style={formStyle.label}>Object Description</Text>
              <TextField placeholder="Object" editable={false} /> */}
              <View style={formStyle.buttons}>
                {/* <TouchableOpacity
                  style={formStyle.formButton}
                  onPress={() => this.props.navigation.navigate("Map")}
                >
                  <Text style={mainStyle.smallText}>Map</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
              style={formStyle.formButton}
              onPress={() => navigation.navigate("DataExport")}
            >
              <Text style={mainStyle.smallText}>Export Data</Text>
            </TouchableOpacity> */}
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
