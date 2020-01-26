import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 200,
    color: "#000000",
    textAlign: "center"
  }
});

export default class Create_acc extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Create_team")}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
