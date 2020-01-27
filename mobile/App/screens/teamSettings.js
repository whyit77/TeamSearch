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
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  underline: { textDecorationLine: "underline" },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

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

  render() {
    return (
      <View style={styles.container}>
        <Text> Heatmap Legend </Text>

        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleITSwitch}
          value={this.state.switchITValue}
        />
        <Text>{this.state.switchITValue ? "ON" : "OFF"}</Text>

        <Text> Heatmap </Text>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleLTSwitch}
          value={this.state.switchLTValue}
        />
        <Text>{this.state.switchLTValue ? "ON" : "OFF"}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this.onMetricButtonPress}
        >
          <Text color={this.metricButtonColor}> Metric </Text>
        </TouchableOpacity>

        <Button
          color={this.state.metricButtonColor}
          onPress={() => {
            this.onMetricButtonPress;
          }}
          title="Chosen"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this.onImperialButtonPress}
        >
          <Text color={this.imperialButtonColor}> Imperial </Text>
        </TouchableOpacity>

        <Button
          color={this.state.imperialButtonColor}
          onPress={() => {
            this.onImperialButtonPress;
          }}
          title="Chosen"
        />
      </View>
    );
  }
}
