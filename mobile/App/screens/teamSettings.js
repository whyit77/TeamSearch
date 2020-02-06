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

import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'
import { form } from "tcomb-form-native/lib";


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
<View style={formStyle.formContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <ScrollView contentContainerStyle={formStyle.formContainer} >
        <View style={mainStyle.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>

          {/* <Text style={{fontSize: 13, color: "#969696", textAlign: "center", marginTop: 30, marginLeft: 5}} >{this.state.switchITValue ? "ON" : "OFF"}</Text> */}
        <Switch
            style={{ marginTop: 30, color: 'white' }}
            onValueChange={this.toggleITSwitch}
            value={this.state.switchITValue}
            trackColor={{true: 'red', false: 'grey'}}
          />

          <Text style={formStyle.toggleLabel}> Heatmap Legend </Text>
          
        </View>

        <Text> Heatmap </Text>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleLTSwitch}
          value={this.state.switchLTValue}
          trackColor={{true: 'red', false: 'grey'}}
        />
        <Text style={mainStyle.text}>{this.state.switchLTValue ? "ON" : "OFF"}</Text>
        <TouchableOpacity
          style={buttonStyle.buttonContainer}
          onPress={this.onMetricButtonPress}
        >
          <Text style={formStyle.formButtonText} color={this.metricButtonColor}> Metric </Text>
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
      </ScrollView>
      </View>
      
    );
  }
}
