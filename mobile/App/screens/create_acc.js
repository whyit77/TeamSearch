import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView
} from "react-native";

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";
//import { reviewApi } from "../util/api";

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

export default class Create_acc extends React.Component {
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
      <KeyboardAvoidingView behavior="position" enabled>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          <Text style={styles.text}>PHOTO UPLOAD</Text>
          <TextField
            label="Email"
            placeholder="john.doe@example.com"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            autoCapitalize="none"
          />
          <TextField
            label="First Name"
            placeholder="John"
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
            autoCapitalize="none"
          />
          <TextField
            label="Last Name"
            placeholder="Doe"
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}
            autoCapitalize="none"
          />
          <TextField
            label="Password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            autoCapitalize="none"
          />
          <TextField
            label="Confirm Password"
            secureTextEntry
            onChangeText={repassword => this.setState({ repassword })}
            value={this.state.repassword}
            autoCapitalize="none"
          />
          <TextField
            label="Phone Number"
            placeholder="(000)000-0000"
            onChangeText={phone => this.setState({ phone })}
            value={this.state.phone}
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
          <TextField
            label="Certifications/Description"
            placeholder="CPR certified, own a trained search hound, etc..."
            onChangeText={desc => this.setState({ desc })}
            value={this.state.desc}
            autoCapitalize="none"
          />
          <ErrorText text={this.state.error} />
          <Button
            text="Submit"
            onPress={() => this.props.navigation.navigate("Team_list")}
          />
          <View style={styles.textBlock}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={[styles.text, styles.link]}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
