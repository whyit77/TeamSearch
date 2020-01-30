import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

import { TextField, ErrorText } from "../Components/Form";
import { Button } from "../Components/Button";
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
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <TextField
          label="Email"
          placeholder="john.doe@example.com"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          autoCapitalize="none"
        />
        <ErrorText text={this.state.error} />
        <Button
          text="Send Temporary Password"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </ScrollView>
    );
  }
}
