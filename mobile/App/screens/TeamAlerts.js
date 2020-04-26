import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { TextField, ErrorText } from "../components/Form";
import { TeamAlert } from "../components/TeamAlert";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, AppRegistry } from "react-navigation";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
} from "../styles/styles";
import { Team } from "../components/Team";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});

const initialState = {
  title: "",
  alertMessage: "",
  urgency: "",
  error: "",
  userId: "",
  username: "",
  teamId: "",
  alerts: [],
  count: 1,
};

const urgencyOptions = ["High", "Medium", "Low"];

class TeamAlerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  async fetchCurrent() {
    console.log("fetchCurrent");

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
          // set current logged in user and selected team in state
          const userId = responseJson.data.me.userId;
          const username = responseJson.data.me.username;
          const teamId = responseJson.data.me.teamId;

          this.setState({
            userId: userId,
            username: username,
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

  handleSubmit = () => {
    const title = this.state.title;
    const message = this.state.alertMessage;
    const urgency = this.state.urgency;
    const teamId = this.state.teamId;
    const userId = this.state.userId;

    let requestBody = {
      query: `
      mutation CreateAlert($userId: String!, $teamId: String!, $title: String!, $message: String!, $urgency: String!) {
        createAlert(userId: $userId, teamId: $teamId, 
          alertInput: {title: $title, urgency: $urgency, message: $message}) {
            title
            message
            urgency
            creator {
              username
            }
          }
        }`,
      variables: {
        userId: userId,
        teamId: teamId,
        title: title,
        message: message,
        urgency: urgency,
      },
    };

    // console.log(requestBody);

    // CHECK IP ADDRESS ////////////////////////////////////////////////////////////////////////////// 192.168.1.9
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

        if (responseJson.data.createAlert == null) {
          const err = responseJson.errors[0].message;
          if (err.includes("Alert validation failed")) {
            this.setState({
              error: "Alert validation failed: required fields missing.",
            });
          }
          console.log("ERR");

          return responseJson;
        }

        if (res.ok) {
          console.log("OKAY ALERT CREATION");
          this.setState({
            title: "",
            alertMessage: "",
            urgency: "",
            error: "",
            count: 1,
          });

          // this.fetchTeamAlerts(); // populate alert list

          return responseJson;
        }

        this.setState(initialState);
        this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async fetchTeamAlerts() {
    const teamId = this.state.teamId;

    console.log("fetchTeamAlerts");

    let requestBody = {
      query: `
        query GetTeam($teamId: String!) {
          getTeam(teamId: $teamId) {
            alerts {
              creator {
                username
              }
              title
              message
              urgency
              createdAt
            }
          }
        }`,
      variables: {
        teamId: teamId,
      },
    };

    // if (this.state.count == 1) {
    console.log("fetching...");

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
        console.disableYellowBox = true;

        if (res.ok) {
          console.log("Okay Fetched Alerts");

          const alerts = responseJson.data.getTeam.alerts;

          const info = [];
          for (let i = 0; i < alerts.length; i++) {
            info.push(alerts[i]);
          }

          this.setState({
            alerts: info,
          });

          this.state.count = 2;
          return responseJson;
        }

        this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });

    this.state.count = 2;
    // }
  }

  async componentDidMount() {
    this.fetchCurrent(); // fetch current user and team
    console.log("mount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("UPDATING...");

    if (this.state.count == 1) {
      console.log("fe");
      this.fetchTeamAlerts(); // populate alert list
    }
  }

  render() {
    return (
      <View style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <View style={formStyle.formContainer}>
          <Text style={formStyle.label}>Type your update here: </Text>
          <TextField
            color="white"
            style={formStyle.placeholderStyle}
            placeholder="Title"
            selectionColor="red"
            keyboardAppearance="dark"
            labelTextColor="white"
            onChangeText={(title) => this.setState({ title })}
            value={this.state.title}
          />
          <TextField
            color="white"
            style={formStyle.placeholderStyle}
            placeholder="Alert Message"
            selectionColor="red"
            keyboardAppearance="dark"
            labelTextColor="white"
            onChangeText={(alertMessage) => this.setState({ alertMessage })}
            value={this.state.alertMessage}
          />

          <Text style={formStyle.label}>Urgency Level: </Text>
          <ModalDropdown
            style={{ margin: 20, color: "white" }}
            color={"white"}
            options={urgencyOptions}
            dropdownStyle={styles.container}
            textStyle={mainStyle.text}
            onSelect={(idx, urgency) => this.setState({ urgency })}
          />
          {this.state.error != "" ? (
            <ErrorText text={this.state.error} />
          ) : (
            <View />
          )}
          <View style={mainStyle.container}>
            <TouchableOpacity
              style={buttonStyle.buttonContainer}
              onPress={() => this.handleSubmit()}
            >
              <Text style={buttonStyle.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
          <Text style={mainStyle.bigText}>Current Notifications:</Text>

          {this.state.alerts.length != 0 ? (
            <FlatList
              data={this.state.alerts.reverse()}
              renderItem={({ item: rowData }) => {
                return (
                  <TeamAlert
                    extraData={rowData}
                    title={rowData.title}
                    urgency={rowData.urgency}
                    message={rowData.message}
                    sender={rowData.creator.username}
                    time={
                      new Date(rowData.createdAt).toISOString().split("T")[0]
                    }
                  />
                );
              }}
              keyExtractor={(item, index) => index}
            />
          ) : (
            <Text style={mainStyle.bigText}>No Alerts to Display</Text>
          )}
        </View>
      </View>
    );
  }
}

export default TeamAlerts;
