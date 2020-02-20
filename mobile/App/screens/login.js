import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar
} from "react-native";

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";

// import { reviewApi, saveAuthToken } from "../util/api";
import { TSApi, saveAuthToken } from "../util/api";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  //componentDidMount() {}

  handleSubmit = () => {
    this.setState({ error: "" });

    // authenticate user
    TSApi("/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => {
        // save login info
        return saveAuthToken(response.result.token);
      })
      .then(() => {
        // go to info screen
        this.props.navigation.navigate("TeamListView");
      })
      .catch(error => {
        this.setState({ error: error.message });
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
                  onPress={() => this.props.navigation.navigate("ResetPW")}
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
                  onPress={() => this.props.navigation.navigate("TeamList")}
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
