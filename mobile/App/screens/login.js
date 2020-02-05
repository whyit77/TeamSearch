import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";
import { TSApi, saveAuthToken } from "../util/api";

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
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <TextField
          label="Email"
          placeholder="john.doe@example.com"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          autoCapitalize="none"
        />
        <TextField
          label="Password"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          autoCapitalize="none"
        />
        <View style={styles.textBlock}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ResetPW")}
          >
            <Text style={[styles.text, styles.link]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <ErrorText text={this.state.error} />
        <Button text="Submit" onPress={() => this.handleSubmit()} />
        <View style={styles.textBlock}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CreateAcc")}
          >
            <Text style={[styles.text, styles.link]}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
