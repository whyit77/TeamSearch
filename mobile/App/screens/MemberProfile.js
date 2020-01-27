import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class MemberProfile extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text> Dr. Dan </Text>
      </SafeAreaView>
    );
  }
}

export default MemberProfile;
