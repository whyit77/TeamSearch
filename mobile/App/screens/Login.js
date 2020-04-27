import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";
import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
} from "../styles/styles";

import { NetworkInfo } from "react-native-network-info";

const initialState = {
  userId: "",
  username: "",
  password: "",
  error: "",
};

export default class Login extends React.Component {
  // static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleSubmit = () => {
    const username = this.state.username;
    const password = this.state.password;

    let requestBody = {
      query: `
        query Login($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        username: username,
        password: password,
      },
    };

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

        // if (responseJson.data == null) {
        //   const err = responseJson.errors[0].message;
        //   console.log("RESET");
        //   this.setState(initialState);
        //   console.log(this.state.username);
        //   this.setState({ error: err });
        //   return responseJson;
        // }

        if (res.ok) {
          console.log("Okay LOGIN");
          this.setState({ userId: responseJson.data.login.userId });
          // this.props.navigation.navigate("TeamListView");
          // this.setState(initialState);
          this.setUser(); // set user in db for future auth
          return responseJson;
        }

        this.setState(initialState);
        this.setState({ error: responseJson.errors[0].message });
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

  /////////////////////////////////////////////////////
  setUser = () => {
    const userId = this.state.userId;
    const username = this.state.username;

    let requestBody = {
      query: `
        mutation setUser($userId: String!, $username: String!) {
          setUser(userId: $userId, username: $username) {
            userId
            username
          }
        }
      `,
      variables: {
        userId: userId,
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
        console.log(responseJson);

        if (res.ok) {
          console.log("Okay CURRENT");
          this.setState(initialState);
          this.props.navigation.navigate("TeamListView");

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

  componentDidMount() {
    console.log("mount");
  }

  render() {
    return (
      <View style={mainStyle.toplevel}>
        <View style={formStyle.formContainer}>
          <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

          <ScrollView contentContainerStyle={formStyle.formContainer}>
            <View style={formStyle.formContainer}>
              <Text style={formStyle.label}>Username</Text>
              <TextField
                // label="Username"
                placeholder="Username"
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                // keyboardType="username"
                labelTextColor="white"
              // textContentType="username"
              />
              <Text style={formStyle.label}>Password</Text>
              <TextField
                //label="Password"
                placeholder="Password"
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
              />
              {/* <View style={formStyle.textBlock}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Reset")}
                >
                  <Text style={[formStyle.text, formStyle.link]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View> */}
              <ErrorText text={this.state.error} />
              <View style={formStyle.formButtonContainer}>
                <Button
                  style={formStyle.formButton}
                  text="Submit"
                  color="white"
                  onPress={this.handleSubmit}
                />
              </View>
              <View>
                <Text style={formStyle.text}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("CreateAccount")
                  }
                >
                  <Text style={[formStyle.text, formStyle.link]}>
                    Create New Account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
