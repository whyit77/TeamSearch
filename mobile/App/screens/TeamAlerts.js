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
  Picker,
  Dimensions
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { TextField, ErrorText } from "../components/Form";
import { TeamAlert } from "../components/TeamAlert";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, AppRegistry } from "react-navigation";
import { Button } from "../components/Button";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
  B1,
  B2,
  B3
} from "../styles/styles";
import { Team } from "../components/Team";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { withTheme } from "react-native-elements";

const screen = Dimensions.get('screen');


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
    fetch("http://192.168.1.10:3000/graphql", {
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
    fetch("http://192.168.1.10:3000/graphql", {
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

    fetch("http://192.168.1.10:3000/graphql", {
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
        {/* <KeyboardAwareScrollView extraScrollHeight={50}> */}

        <View style={formStyle.formContainer}>
        <Text style={formStyle.label}>Enter Alert Information: </Text>

        <ModalDropdown
            style={{
              marginTop: 20,
              // marginBottom: 20, 
              height: 30, 
              backgroundColor: B2, 
              width: 120, 
              alignSelf: 'center', 
              borderRadius: 30,
              justifyContent: 'center'
            }}

            dropdownStyle={styles.container}
            
            dropdownTextStyle={{
              backgroundColor: B3, 
              color: 'white', 
              fontSize: 15,
              alignSelf: 'center'


            }}
            textStyle={mainStyle.text}
            defaultValue={'Urgency...'}
            options={urgencyOptions}
            onSelect={(idx, urgency) => this.setState({ urgency })}
            keyboardShouldPersistTaps='never'
            dropdownTextHighlightStyle={{
              color: 'red', 
            }}
            showsVerticalScrollIndicator={true}
            animated={true}
          />
          {/* <Text style={formStyle.label}>Type your update here: </Text> */}

          <TextField
                placeholder="Title"
                autoCapitalize="words"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
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
          
          {this.state.error != "" ? (
            <ErrorText text={this.state.error} />
          ) : (
            <View />
          )}
          {/* <View style={mainStyle.container}>
            <TouchableOpacity
              style={buttonStyle.buttonContainer}
              onPress={() => this.handleSubmit()}
            >
              <Text style={buttonStyle.buttonText}>Send</Text>
            </TouchableOpacity>
          </View> */}
          <View style={mainStyle.container}>
                <Button
                  style={formStyle.formButton}
                  text="Send"
                  onPress={() => this.handleSubmit()}
                />
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
        {/* </KeyboardAwareScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: B3,
    // color: B3,
    alignItems: "center",
    justifyContent: "center",
    // marginLeft: screen.width/2-110,
    width: 100,
    borderRadius: 30,
    height: 98,
    borderWidth: 0,
    borderTopWidth: 3,
    borderTopColor: B1,
    alignSelf: 'center',
    marginLeft: 10


    // borderBottomColor: 'white',
  },
  text: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default TeamAlerts;
