// App/screens/createPin.js

import React from "react";
import {
  TextInput,
  Switch,
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  Button
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  underline: { textDecorationLine: "underline" }
});

export default class App extends React.Component {
  state = {
    switchITValue: false,
    switchLTValue: false,
    name: "",
    location: "",
    descr: ""
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
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
          }}
        />

        <Text
          style={styles.underline}
          onPress={() => Alert.alert("Navigate to Change Photo Page")}
        >
          Photo/Video of Clue
        </Text>

        <TextInput
          onChangeText={name => this.setState({ name })}
          placeholder="Name of Pin"
          maxLength={40}
        />

        <TextInput
          onChangeText={location => this.setState({ location })}
          placeholder="Location of Pin"
          maxLength={40}
        />

        <TextInput
          onChangeText={descr => this.setState({ descr })}
          placeholder="Description of Pin:"
          maxLength={250}
        />

        <Button title="Create Pin" />
      </View>
    );
  }
}
