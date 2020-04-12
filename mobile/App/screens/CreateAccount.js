import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Alert
} from "react-native";

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";
import { ImageField } from "../components/Image";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";

const initialState = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  repassword: "",
  phone: "",
  description: "",
  error: ""
};

export default class CreateAccount extends React.Component {
  state = initialState;

  handleSubmit = () => {
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const repassword = this.state.repassword;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const phone = this.state.phone;
    const description = this.state.description;

    let requestBody = {
      query: `
          mutation CreateUser($username: String!, $email: String!, $firstName: String!, $lastName: String!, 
                  $password: String!, $repassword: String!, $phone: String!, $description: String) {
            createUser(userInput: {username: $username, email: $email, firstName: $firstName, lastName: $lastName, 
                    password: $password, repassword: $repassword, phone: $phone, description: $description}) {
              _id
              username
              email
              firstName
              lastName
            }
          }
        `,
      variables: {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        repassword: repassword,
        phone: phone,
        description: description
      }
    };

    // CHECK IP ADDRESS ///////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.8:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const responseJson = await res.json();

        console.log(responseJson);

        ////////// VERIFY INPUT ////////////
        if (responseJson.data.createUser == null) {
          this.setState({ error: responseJson.errors[0].message });

          // CHECK if fields missing
          if (this.state.error.includes("User validation failed")) {
            this.setState({
              error: "User validation failed: required fields missing."
            });
          }
          // CHECK if user exists
          if (this.state.error.includes("User exists already.")) {
            this.setState(initialState);
            this.setState({ error: "User exists already." });
          }
          // CHECK if passwords match
          if (this.state.error.includes("Passwords do not match!")) {
            this.setState({ password: "", repassword: "" });
          }
          // CHECK password length (>= 8 chars)
          if (
            this.state.error.includes(
              "Password must be at least 8 characters long."
            )
          ) {
            this.setState({ password: "", repassword: "" });
          }
          // CHECK phone number length (10 chars)
          if (this.state.error.includes("Phone number is invalid.")) {
            this.setState({ phone: "" });
          }

          console.log(this.state.error);
          return responseJson;
        }

        // if input is good, create user
        if (res.ok) {
          console.log("Okay CREATE");
          this.props.navigation.navigate("Login");
          this.setState(initialState);
          return responseJson;
        }

        this.setState(initialState);
        throw new Error(responseJson.error);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { image } = this.state;
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <KeyboardAwareScrollView extraScrollHeight={50}>
          <View style={formStyle.formContainer}>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={mainStyle.scrollView}
            >
              <View style={mainStyle.toplevel}>
                {/* <Text style={mainStyle.text}>PHOTO UPLOAD</Text>
                <ImageField
                  imageStyles={{ width: 60, height: 60 }}
                  // source={{
                  //   uri:
                  //     "https://i.ya-webdesign.com/images/white-camera-png-7.png"
                  // }}
                  bottomLabel="Add/Change Photo"
                  onBottomPress={() =>
                    Alert.alert("Navigate to Change Photo Page")
                  }
                  bottomLabelStyles={mainStyle.link}
                /> */}
                <Text style={formStyle.label}>Username</Text>
                <TextField
                  //label="Username"
                  placeholder="Username"
                  onChangeText={username => this.setState({ username })}
                  value={this.state.username}
                  autoCapitalize="none"
                  style={formStyle.placeholderStyle}
                  color="white"
                  selectionColor="red"
                  keyboardAppearance="dark"
                  labelTextColor="white"
                />
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
                <Text style={formStyle.label}>First Name</Text>
                <TextField
                  // label="First Name"
                  placeholder="John"
                  onChangeText={firstName => this.setState({ firstName })}
                  value={this.state.firstName}
                  autoCapitalize="words"
                  style={formStyle.placeholderStyle}
                  color="white"
                  selectionColor="red"
                  keyboardAppearance="dark"
                  labelTextColor="white"
                />
                <Text style={formStyle.label}>Last Name</Text>
                <TextField
                  //label="Last Name"
                  placeholder="Doe"
                  onChangeText={lastName => this.setState({ lastName })}
                  value={this.state.lastName}
                  autoCapitalize="words"
                  style={formStyle.placeholderStyle}
                  color="white"
                  selectionColor="red"
                  keyboardAppearance="dark"
                  labelTextColor="white"
                />
                <Text style={formStyle.label}>Password</Text>
                <TextField
                  //label="Password"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  autoCapitalize="none"
                  style={formStyle.placeholderStyle}
                  color="white"
                  selectionColor="red"
                  keyboardAppearance="dark"
                />
                <Text style={formStyle.label}>Confirm Password</Text>
                <TextField
                  //label="Confirm Password"
                  secureTextEntry
                  onChangeText={repassword => this.setState({ repassword })}
                  value={this.state.repassword}
                  autoCapitalize="none"
                  style={formStyle.placeholderStyle}
                  color="white"
                  selectionColor="red"
                  keyboardAppearance="dark"
                />
                <Text style={formStyle.label}>Phone Number</Text>
                <TextField
                  //label="Phone Number"
                  placeholder="(000)000-0000"
                  onChangeText={phone => this.setState({ phone })}
                  value={this.state.phone}
                  style={formStyle.placeholderStyle}
                  color="white"
                  selectionColor="red"
                  keyboardAppearance="dark"
                  keyboardType="phone-pad"
                />
                <Text style={formStyle.label}>Certifications/Description</Text>
                <TextField
                  //label="Certifications/Description"
                  placeholder="CPR certified, own a trained search hound, etc..."
                  onChangeText={desc => this.setState({ desc })}
                  value={this.state.desc}
                  autoCapitalize="none"
                  style={formStyle.placeholderStyle}
                  color="white"
                  selectionColor="red"
                  keyboardAppearance="dark"
                />
                <ErrorText text={this.state.error} />
                <View style={formStyle.formButtonContainer}>
                  <Button
                    style={formStyle.formButton}
                    text="Submit"
                    onPress={this.handleSubmit}
                  />
                </View>
                <View style={mainStyle.textBlock}>
                  <Text style={mainStyle.text}>Already have an account?</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <Text style={[mainStyle.text, mainStyle.link]}>
                      Sign in
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
