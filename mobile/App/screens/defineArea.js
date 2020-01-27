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

export default class DefineArea extends React.Component {
  state = {
    area: "",
    units: "XXXXX",
    radius: "",
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
          <Text style={styles.text}>MAP</Text>
          <Text style={styles.text}>UNITS DROPDOWN</Text>
          <TextField
            label="Search Radius"
            onChangeText={radius => this.setState({ radius })}
            value={this.state.radius}
            autoCapitalize="none"
          />
          <ErrorText text={this.state.error} />
          <Button
            text="Finish Creating Team"
            onPress={() => this.props.navigation.navigate("TeamInfo")}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
