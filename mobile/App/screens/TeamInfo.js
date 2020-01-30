import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, AppRegistry } from "react-navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text> Search Description </Text>
    <TextInput style={{ height: 40 }} placeholder="Enter text here" />
    <Text> Object Description </Text>
    <TextInput style={{ height: 40 }} placeholder="Enter text here" />
    <TouchableOpacity onPress={() => navigation.navigate("Map")}>
      <Text style={styles.text}> Map </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("DataExport")}>
      <Text style={styles.text}> Export Data </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("TeamAlerts")}>
      <Text style={styles.text}> Team Alerts </Text>
    </TouchableOpacity>
  </View>
);
