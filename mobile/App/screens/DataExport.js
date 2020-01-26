import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import ModalDropdown from "react-native-modal-dropdown";

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
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Select criteria to export: </Text>
        <ModalDropdown
          options={["Group Data", "List of Pins", "Map Data"]}
          dropdownStyle={styles.container}
          textStyle={styles.text}
          onSelect={(index, value) => {
            this.setState({ selectedCategory: value });
          }}
        />

        <Text style={styles.text}> Choose a method of export: </Text>
        <ModalDropdown
          options={["Email", "Text", "Carrier Pigeon"]}
          dropdownStyle={styles.container}
          textStyle={styles.text}
          onSelect={(index, value) => {
            this.setState({ selectedCategory: value });
          }}
        />

        <Text style={styles.text}> File Preview </Text>

        <TouchableOpacity onPress={() => alert("Exported!")}>
          <Text style={styles.text}> Export </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default DataExport;
