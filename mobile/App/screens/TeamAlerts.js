import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import SafeAreaView from "react-native-safe-area-view";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// Urgency Level Dropdown Menu

export default () => (
  <View style={styles.container}>
    <Text> Team Alerts </Text>
    <Text> Type your update here: </Text>
    <Button> Send Notifications </Button>
    <Text> Current Notifications </Text>
    <Text> Time: </Text>
    <Text> Message: </Text>
  </View>
);
