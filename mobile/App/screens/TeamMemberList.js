import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

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
    fontSize: 15,
    textAlign: "center",

    fontWeight: "600"
  }
});

// Necessary to extract how many team members are currently in a team and then make rows for all members

export default ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}> Team Member 1 </Text>
    <TouchableOpacity onPress={() => navigation.navigate("MemberProfile")}>
      <Text style={styles.text}> View Profile </Text>
    </TouchableOpacity>
  </SafeAreaView>
);