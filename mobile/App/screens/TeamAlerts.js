import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
// import SafeAreaView from "react-native-safe-area-view";
import ModalDropdown from "react-native-modal-dropdown";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, AppRegistry } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600"
  }
});

// Urgency Level Dropdown Menu

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text> Type your update here: </Text>
    <TextInput style={{ height: 40 }} placeholder="Enter text here" />

    <Text> Urgency Level: </Text>
    <ModalDropdown
      options={["Very important", "Important", "Not important"]}
      dropdownStyle={styles.container}
      textStyle={styles.text}
    />
    <TouchableOpacity onPress={() => navigation.navigate("TeamInfo")}>
      <Text style={styles.text}> Send Notification </Text>
    </TouchableOpacity>

    <Text> Current Notifications </Text>
    <Text> Time: </Text>
    <Text> Message: </Text>
  </View>
);
