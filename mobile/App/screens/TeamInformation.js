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
    const teamId = "5e84e6ea4cc6a4552005268c";

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
    fetch("http://<IPv4>:3000/graphql", {
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
