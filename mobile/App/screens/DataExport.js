import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ModalDropdown from "react-native-modal-dropdown";

import { mainStyle, formStyle, buttonStyle } from '../styles/styles';

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

class DataExport extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={mainStyle.container}>
        <Text style={mainStyle.smallText}> Select criteria to export: </Text>
        <ModalDropdown
          options={["Group Data", "List of Pins", "Map Data"]}
          dropdownStyle={mainStyle.container}
          textStyle={mainStyle.text}
          onSelect={(index, value) => {
            this.setState({ selectedCategory: value });
          }}
        />

        <Text style={mainStyle.smallText}> Choose a method of export: </Text>
        <ModalDropdown
          options={["Email", "Text", "Carrier Pigeon"]}
          dropdownStyle={styles.container}
          textStyle={mainStyle.text}
          onSelect={(index, value) => {
            this.setState({ selectedCategory: value });
          }}
        />

        <Text style={mainStyle.smallText}> File Preview </Text>

        <TouchableOpacity style={buttonStyle.buttonContainer} onPress={() => alert("Exported!")}>
          <Text style={buttonStyle.buttonText}> Export </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default DataExport;
