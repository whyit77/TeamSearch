// App/screens/teamSettings.js

import React from "react";
import {
  TextInput,
  Switch,
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from "react-native";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";
import { form } from "tcomb-form-native/lib";

export default class App extends React.Component {
  state = {
    switchITValue: false,
    switchLTValue: false,
    text: "",
    name: "",
    email: "",
    certOrDescript: "",
    cell: "",
    changePass: "",
    confirmPass: "",
    metricButtonColor: "#979797",
    imperialButtonColor: "#979797"
  };

  onMetricButtonPress = () => {
    if (this.state.metricButtonColor == "#ff002b") {
      this.setState({ metricButtonColor: "#979797" });
    } else {
      this.setState({ metricButtonColor: "#ff002b" });
      this.setState({ imperialButtonColor: "#979797" });
    }
  };

  onImperialButtonPress = () => {
    if (this.state.imperialButtonColor == "#ff002b") {
      this.setState({ imperialButtonColor: "#979797" });
    } else {
      this.setState({ imperialButtonColor: "#ff002b" });
      this.setState({ metricButtonColor: "#979797" });
    }
  };

  toggleITSwitch = value => {
    this.setState({ switchITValue: value });
  };

  toggleLTSwitch = value => {
    this.setState({ switchLTValue: value });
  };

  toggleUTSwitch = value => {
    this.setState({ switchUTValue: value });
  };

  render() {
    return (
      <View style={formStyle.formContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <ScrollView contentContainerStyle={formStyle.formContainer}>
          <View style={mainStyle.container}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <Text style={{fontSize: 13, color: "#969696", textAlign: "center", marginTop: 30, marginLeft: 5}} >{this.state.switchITValue ? "ON" : "OFF"}</Text> */}
              <Switch
                style={formStyle.toggle}
                onValueChange={this.toggleITSwitch}
                value={this.state.switchITValue}
                trackColor={{ true: "red", false: "grey" }}
              />

              <Text style={formStyle.toggleLabel}> Heatmap Legend </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <Text style={{fontSize: 13, color: "#969696", textAlign: "center", marginTop: 30, marginLeft: 5}} >{this.state.switchITValue ? "ON" : "OFF"}</Text> */}
              <Switch
                style={formStyle.toggle}
                onValueChange={this.toggleLTSwitch}
                value={this.state.switchLTValue}
                trackColor={{ true: "red", false: "grey" }}
              />

              <Text style={formStyle.toggleLabel}> Heatmap </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <Text style={{fontSize: 13, color: "#969696", textAlign: "center", marginTop: 30, marginLeft: 5}} >{this.state.switchITValue ? "ON" : "OFF"}</Text> */}
              <Text style={formStyle.toggleLabel}>Metric </Text>

              <Switch
                style={formStyle.toggle}
                onValueChange={this.toggleUTSwitch}
                value={this.state.switchUTValue}
                trackColor={{ true: "red", false: "grey" }}
              />

              <Text style={formStyle.toggleLabel}> Imperial </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
