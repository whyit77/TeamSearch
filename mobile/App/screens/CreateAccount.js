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

//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";
import { ImageField } from "../components/image";

import { TSApi } from "../util/api";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";

export default class CreateAccount extends React.Component {
  state = {
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

  //   ////////// CREATE NEW ACCOUNT ////////////
  //   reviewApi("/create-account", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       firstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       password: this.state.password
  //     })
  //   })
  //     .then(() => {
  //       // go to login screen
  //       this.props.navigation.navigate("SignIn");
  //     })
  //     .catch(error => {
  //       this.setState({ error: error.message });
  //     });
  //   ///////////////////////////////////////////
  // };

  submitHandler = () => {
    ////////// CHECK PASSWORDS ////////////
    if (this.state.password != this.state.repassword) {
      this.setState({
        error: "Passwords do not match!",
        password: "",
        repassword: ""
      });
    }
    //////////////////////////////////////

    // event.preventDefault();
    // const email = this.emailEl.current.value;
    // const password = this.passwordEl.current.value;

    if (
      this.state.email.trim().length === 0 ||
      this.state.password.trim().length === 0
    ) {
      return;
    }

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

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation CreateUser($email: String!, $password: String!) {
            createUser(userInput: {email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
        variables: {
          email: email,
          password: password
        }
      };
    }
    // reviewApi("/create-account", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: this.state.email,
    //       firstName: this.state.firstName,
    //       lastName: this.state.lastName,
    //       password: this.state.password
    //     })
    //   })
    //     .then(() => {
    //       // go to login screen
    //       this.props.navigation.navigate("SignIn");
    //     })
    //     .catch(error => {
    //       this.setState({ error: error.message });
    //     });
    TSApi("/createAcc", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
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
      .then(() => {
        // go back to login page
        this.props.navigation.navigate("Login");
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
                  onPress={() => this.submitHandler()}
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
