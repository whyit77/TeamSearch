import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar
} from "react-native";

import { TextField, ErrorText } from "../Components/Form";
import { Button } from "../Components/Button";
//import { reviewApi } from "../util/api";

import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'


const styles = StyleSheet.create({
  textBlock: {
    marginTop: 20
  },
  text: {
    fontSize: 18,
    color: "#969696",
    textAlign: "center",
    marginBottom: 2
  },
  link: {
    textDecorationLine: "underline"
  }
});

export default class ResetPW extends React.Component {
  state = {
    email: "",
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
      <View style={mainStyle.toplevel}>

      <View style={formStyle.formContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <ScrollView contentContainerStyle={formStyle.formContainer}>
        <View style={formStyle.formContainer}>
        <Text style={formStyle.text} >Please enter your email to recieve a temporary password.</Text>

          <Text style={formStyle.label} >Email</Text>
          <TextField
            //label="Email"
            placeholder="john.doe@example.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            autoCapitalize="none"
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
            keyboardType='email-address'
            labelTextColor='white'
            textContentType='emailAddress'
          />
          <ErrorText text={this.state.error} />
          <View style={formStyle.formButtonContainer}>
          <Button
            style={formStyle.formButton}
            text="Send"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
        </View>
      </ScrollView>
      </View>
      </View>
    );
  }
}
