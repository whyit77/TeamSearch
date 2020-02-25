import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { TextField, ErrorText } from '../components/Form';
import { Button } from '../components/Button';
import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  // static contextType = AuthContext;

  handleSubmit = () => {
    // event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    // if (email.trim().length === 0 || password.trim().length === 0) {
    //   return;
    // }

    let requestBody = {
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: email,
        password: password
      }
    };

    // CHECK IP ADDRESS
    fetch("http://172.17.57.147:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const responseJson = await res.json();

        if (res.ok) {
          console.log("Okay LOGIN");
          this.props.navigation.navigate("TeamListView");
          return responseJson;
        }

        // if (res.status !== 200 && res.status !== 201) {
        //   throw new Error(res.error);
        // }

        this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);

        // return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={mainStyle.toplevel}>
        <View style={formStyle.formContainer}>
          <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

          <ScrollView contentContainerStyle={formStyle.formContainer}>
            <View style={formStyle.formContainer}>
              <Text style={formStyle.label}>Email</Text>
              <TextField
                //label="Email"
                placeholder="john.doe@example.com"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                keyboardType="email-address"
                labelTextColor="white"
                textContentType="emailAddress"
              />
              <Text style={formStyle.label}>Password</Text>
              <TextField
                //label="Password"
                placeholder="Must be at least 8 characters"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
              />
              <View style={formStyle.textBlock}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Reset")}
                >
                  <Text style={[formStyle.text, formStyle.link]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
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
                    this.props.navigation.navigate("ComponentsCreation")
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
