// App/screens/pinInfo.js

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
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  underline: { textDecorationLine: "underline" }
});

class PinInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchITValue: false,
      switchLTValue: false,
      user: "",
      pinLocation: "",
      pinDescription: ""
    };
  }

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

        <ScrollView contentContainerStyle={formStyle.formContainer}>
          <View style={mainStyle.container}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
              }}
            />
          </View>
          <TextField
            onChangeText={location => this.setState({ pinLocation: location })}
            placeholder="Name of pin"
            maxLength={40}
          />

          <Text style={formStyle.label}> Pinned By: (Name) </Text>

          <TextField
            onChangeText={description =>
              this.setState({ pinDescription: description })
            }
            placeholder="Description of pin:"
            maxLength={250}
          />
          <View style={mainStyle.container}>
            <TouchableOpacity
              style={buttonStyle.buttonContainer}
              onPress={() => this.props.navigation.navigate("Map")}
            >
              <Text style={buttonStyle.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PinInformation;
