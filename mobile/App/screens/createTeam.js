import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView
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

export default class CreateTeam extends React.Component {
  state = {
    teamName: "",
    teamCode: "XXXXX",
    searchDesc: "",
    subjectDesc: "",
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
            label="Team Name"
            onChangeText={teamName => this.setState({ teamName })}
            value={this.state.teamName}
            autoCapitalize="none"
          />
          <TextField
            label="Team Code"
            value={this.state.teamCode}
            autoCapitalize="none"
          />
          <TextField
            label="Search Description"
            placeholder="What is the situation?"
            onChangeText={searchDesc => this.setState({ searchDesc })}
            value={this.state.searchDesc}
            autoCapitalize="none"
          />
          <TextField
            label="Subject Description"
            placeholder="What are you looking for?"
            onChangeText={subjectDesc => this.setState({ subjectDesc })}
            value={this.state.subjectDesc}
            autoCapitalize="none"
          />
          <ErrorText text={this.state.error} />
          <Button
            text="Define Your Search Area"
            onPress={() => this.props.navigation.navigate("DefineArea")}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
