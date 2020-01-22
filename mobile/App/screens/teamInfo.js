import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default () => (
  <View style={styles.container}>
    <Text> Team Info </Text>
    <Text> Search Description </Text>
    <Text> Object Description </Text>
  </View>
);