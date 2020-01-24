import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
// import { RadioButton } from "react-native-paper";
// import ModalDropdown from "react-native-modal-dropdown";

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
    letterSpacing: -0.02,
    fontWeight: "600"
  }
});

// Include dropdown menu for options
class DataExport extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Select criteria to export: </Text>
        {/* <RadioButton> Group Data </RadioButton>
      <RadioButton> List of Pins </RadioButton>
      <RadioButton> Map Data </RadioButton> */}
        <Text style={styles.text}> Email </Text>
        <Text style={styles.text}> Choose a method of export: </Text>
        <Text style={styles.text}> File Preview </Text>
        {/* <Button> Export </Button> */}
      </SafeAreaView>
    );
  }
}

export default DataExport;
