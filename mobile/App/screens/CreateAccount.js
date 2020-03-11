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
// import { TextFieldEmail } from "../components/FormEmail";
import { Button } from "../components/Button";
import { ImageField } from "../components/image";

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
  phoneNumberFormat: "",
  desc: "",
  error: ""
};

export default class CreateAccount extends React.Component {
  state = initialState;

  handleSubmit = () => {
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const phone = this.state.phone;
    const desc = this.state.desc;

    let requestBody = {
      query: `
          mutation CreateUser($username: String!, $email: String!, $firstName: String!, $lastName: String!, $password: String!, $phone: String!, $desc: String) {
            createUser(userInput: {username: $username, email: $email, firstName: $firstName, lastName: $lastName, password: $password, phone: $phone, desc: $desc}) {
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
        phone: phone,
        desc: desc
      }
    };

    // CHECK IP ADDRESS ///////////////////////////////////////////////////////////////////////////
    fetch("http://172.20.10.4:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const responseJson = await res.json();

        // VALIDATE EMAIL /////////////////////////////////////////////////////////
        // const isValid = this.validate({
        //   emailAddress: { email: true }
        // });

        // if (isValid == false) {
        //   this.setState({ initialState });
        //   this.setState({ error: "Email address is invalid." });
        //   return responseJson;
        // }

        // this.validate({
        //   name: {minlength:3, maxlength:7, required: true},
        //   email: {email: true},
        //   number: {numbers: true},
        //   date: {date: 'YYYY-MM-DD'}
        // });

        ////////// CHECK PASSWORDS ////////////
        if (this.state.password != this.state.repassword) {
          this.setState({
            error: "Passwords do not match!",
            password: "",
            repassword: ""
          });
          return responseJson;
        }
        //////////////////////////////////////

        console.log(responseJson);

        if (responseJson.data.createUser == null) {
          this.setState({ error: responseJson.errors[0].message });
        }
        if (this.state.error.includes("User validation failed")) {
          this.setState({
            error: "User validation failed: required fields missing."
          });
          this.setState(initialState);
          return responseJson;
        } else if (this.state.error.includes("User exists already.")) {
          this.setState(initialState);
          return responseJson;
        }

        if (res.ok) {
          console.log("Okay CREATE");
          this.props.navigation.navigate("Login");
          // TODO: CLEAR FIELDS AFTER NAVIGATING AWAY
          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        {/* <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column' , justifyContent: 'center',}} behavior="padding" enabled> */}
        <View style={formStyle.formContainer}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={mainStyle.scrollView}
          >
            <View style={mainStyle.toplevel}>
              <Text style={mainStyle.text}>PHOTO UPLOAD</Text>
              <ImageField
                imageStyles={{ width: 60, height: 60 }}
                source={{
                  uri:
                    "https://i.ya-webdesign.com/images/white-camera-png-7.png"
                }}
                bottomLabel="Add/Change Photo"
                onBottomPress={() =>
                  Alert.alert("Navigate to Change Photo Page")
                }
                bottomLabelStyles={mainStyle.link}
              />
              <Text style={formStyle.label}>Username</Text>
              <TextField
                //label="Username"
                placeholder="user123"
                onChangeText={username => this.setState({ username })}
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
                autoCapitalize="none"
                keyboardAppearance="dark"
              />
              <Text style={formStyle.label}>Last Name</Text>
              <TextField
                //label="Last Name"
                placeholder="Doe"
                onChangeText={lastName => this.setState({ lastName })}
                value={this.state.lastName}
                autoCapitalize="none"
                keyboardAppearance="dark"
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
                // value={this.state.phoneNumberFormat}
                // onChangeText={phoneNumberFormat => {
                //   let phoneNumber = phoneNumberFormat.toString().replace(/\D+/g, "");
                //   this.setState({
                //     phoneNumberFormat: phoneNumberFormat,
                //     phone: phoneNumber
                //   });
                // }}
                // type={"cel-phone"}
                // maxLength={
                //   this.state.phoneNumberFormat.toString().startsWith("1") ? 18 : 16
                // }
                // options={
                //   this.state.phoneNumber.startsWith("1")
                //     ? {
                //         dddMask: "9 (999) 999 - "
                //       }
                //     : {
                //         dddMask: "(999) 999 - "
                //       }
                // }
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
                  <Text style={[mainStyle.text, mainStyle.link]}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    );
  }
}
