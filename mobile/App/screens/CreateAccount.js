import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar
} from "react-native";

//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


import { TextField, ErrorText } from "../Components/Form";
import { Button } from "../Components/Button";
//import { reviewApi } from "../util/api";

import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'


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

  // handleSubmit = () => {
  //   this.setState({ error: "" });

  //   ////////// CHECK PASSWORDS ////////////
  //   if (this.state.password != this.state.repassword) {
  //     this.setState({
  //       error: "Passwords do not match!",
  //       password: "",
  //       repassword: ""
  //     });
  //   }
  //   //////////////////////////////////////

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

  render() {
    return (

      <SafeAreaView style={mainStyle.toplevel}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      {/* <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column' , justifyContent: 'center',}} behavior="padding" enabled> */}
      <View style={formStyle.formContainer}>
      <ScrollView style={mainStyle.scrollView} >
        <View style={mainStyle.toplevel}>
          <Text style={mainStyle.text}>PHOTO UPLOAD</Text>
          <Text style={formStyle.label} >Email</Text>
          <TextField
            //label="Email"
            placeholder="john.doe@example.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            autoCapitalize="none"
            style={formStyle.placeholderStyle}
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
            keyboardType='email-address'
            labelTextColor='white'
            textContentType='emailAddress'
          />
          <Text style={formStyle.label} >First Name</Text>
          <TextField
           // label="First Name"
            placeholder="John"
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
            autoCapitalize="none"
            keyboardAppearance='dark'
          />
          <Text style={formStyle.label} >Last Name</Text>
          <TextField
            //label="Last Name"
            placeholder="Doe"
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}
            autoCapitalize="none"
            keyboardAppearance='dark'
          />
          <Text style={formStyle.label} >Password</Text>
          <TextField
            //label="Password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            autoCapitalize="none"
            style={formStyle.placeholderStyle}
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
          />
          <Text style={formStyle.label} >Confirm Password</Text>
          <TextField
            //label="Confirm Password"
            secureTextEntry
            onChangeText={repassword => this.setState({ repassword })}
            value={this.state.repassword}
            autoCapitalize="none"
            style={formStyle.placeholderStyle}
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
          />
          <Text style={formStyle.label} >Phone Number</Text>
          <TextField
            //label="Phone Number"
            placeholder="(000)000-0000"
            onChangeText={phone => this.setState({ phone })}
            value={this.state.phone}
            style={formStyle.placeholderStyle}
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
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
          <Text style={formStyle.label} >Certifications/Discription</Text>
          <TextField
            //label="Certifications/Description"
            placeholder="CPR certified, own a trained search hound, etc..."
            onChangeText={desc => this.setState({ desc })}
            value={this.state.desc}
            autoCapitalize="none"
            style={formStyle.placeholderStyle}
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
          />
          <ErrorText text={this.state.error} />
          <View style={formStyle.formButtonContainer}>
          <Button
            style={formStyle.formButton}
            text="Submit"
            onPress={() => this.props.navigation.navigate("TeamList")}
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
