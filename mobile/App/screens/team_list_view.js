import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    <Text>TEAM LIST VIEW SCREEN</Text>
  </View>
);
