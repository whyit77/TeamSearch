// App/screens/userSettings.js

import React from "react";
import {
  TextInput,
  Switch,
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  // Button,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
  B1,
  B2,
  B3,
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "../components/Button";
import { Avatar } from "react-native-elements";

// import Button from "../components/Button";

// import { AuthContext } from "../context/auth-context";

export default class App extends React.Component {
  // static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      // switchITValue: false,
      // switchLTValue: false,
      userId: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      phone: "",
      // changePass: "",
      // confirmPass: ""
    };
  }

  // toggleITSwitch = value => {
  //   this.setState({ switchITValue: value });
  // };

  // toggleLTSwitch = value => {
  //   this.setState({ switchLTValue: value });
  // };

  logout = () => {
    const username = this.state.username;
    console.log(username);

    let requestBody = {
      query: `
        mutation logout($username: String!) {
          logout(username: $username) {
            username
          }
        }
      `,
      variables: {
        username: username,
      },
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
        console.log("logging out");
        console.log(responseJson);

        if (res.ok) {
          console.log("Okay LOGOUT");
          this.props.navigation.navigate("Login");
          return responseJson;
        }

        // this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      // .then(resData => {
      //   if (resData.data.login.token) {
      //     //////////////
      //     this.context.Login(
      //       resData.data.login.token,
      //       resData.data.login.userId,
      //       resData.data.login.tokenExpiration
      //     );
      //   }
      // })
      .catch((err) => {
        console.log(err);
      });
  };

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

  fetchUser() {
    // const userId = "5e914c8d4d7ca83308289294";
    const userId = this.state.userId;

    let requestBody = {
      query: `
          query getUser($userId: String!) {
            getUser(userId: $userId) {
              _id
              username
              firstName
              lastName
              email
              description
              phone
            }
          }`,
      variables: {
        userId: userId,
      },
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
        // if (res.status !== 200 && res.status !== 201) {
        //   throw new Error("Failed!");
        // }

        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          // const userId = responseJson.data.getUser._id;
          const username = responseJson.data.getUser.username;
          const firstName = responseJson.data.getUser.firstName;
          const lastName = responseJson.data.getUser.lastName;
          const email = responseJson.data.getUser.email;
          const description = responseJson.data.getUser.description;
          const phone = responseJson.data.getUser.phone;

          this.setState({
            // userId: userId,
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            description: description,
            phone: phone,
          });

          if (description == "") {
            this.setState({ description: "NONE" });
          }

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchCurrentUser();
    console.log("mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userId !== this.state.userId) {
      console.log("UPDATING...");
      this.fetchUser(); // populate logged in user info
    }
  }

  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "sms:${" + this.state.phone + "}";
    } else {
      // phoneNumber = 'telprompt:${1234567890}';
      phoneNumber = "sms:${" + this.state.phone + "}";
    }

    Linking.openURL("sms:" + this.state.phone);
  };

  render() {
    return (
      <View style={formStyle.formContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <KeyboardAwareScrollView extraScrollHeight={50}>
          <ScrollView contentContainerStyle={formStyle.formContainer}>
            <View style={mainStyle.container}>
              <Avatar
                rounded
                // icon={{ name: "user", type: "font-awesome" }}
                title={this.state.firstName[0] + this.state.lastName[0]}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{ margin: 10, size: 60 }}
                size={150}
                overlayContainerStyle={{
                  backgroundColor: B2,
                }}
              />
            </View>
            <View>
              <Text style={formStyle.label}>Username: </Text>
              <TextField editable={false}>
                <Text style={formStyle.fillInText}>{this.state.username}</Text>
              </TextField>

              <Text style={formStyle.label}>Name: </Text>
              <TextField editable={false}>
                <Text style={formStyle.fillInText}>
                  <Text style={formStyle.fillInText}>
                    {this.state.firstName} {this.state.lastName}
                  </Text>
                </Text>
              </TextField>

              <Text style={formStyle.label}>Description: </Text>
              <TextField editable={false}>
                <Text style={formStyle.placeholderStyle}>
                  {this.state.description}
                </Text>
              </TextField>

              <Text style={formStyle.label}>
                Email:
                <Text
                  onPress={() => Linking.openURL("mailto:" + this.state.email)}
                  title="support@example.com"
                  style={formStyle.placeholderStyle}
                >
                  {" "}
                  {this.state.email}
                </Text>
              </Text>

              <Text style={formStyle.label}>
                Contact Number:
                <Text
                  onPress={this.dialCall}
                  activeOpacity={0.7}
                  style={formStyle.placeholderStyle}
                >
                  {" "}
                  {this.state.phone}
                </Text>
              </Text>

              <View style={formStyle.formButtonContainer}>
                <Button
                  style={formStyle.formButton}
                  text="LOGOUT"
                  color="white"
                  onPress={() => this.logout()}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
