import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";
// import SafeAreaView from "react-native-safe-area-view";
import ModalDropdown from "react-native-modal-dropdown";
import { TextField, ErrorText } from "../Components/Form";


import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, AppRegistry } from "react-navigation";

import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'
import { form } from "tcomb-form-native/lib";

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

// Urgency Level Dropdown Menu

export default ({ navigation }) => (
  <View style={mainStyle.toplevel}>
    <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

  <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',}} behavior="padding" enabled>
  <ScrollView contentContainerStyle={mainStyle.toplevel}>
    <View style={formStyle.formContainer}>
    <Text style={formStyle.label}>Type your update here: </Text>
    <TextField 
      color='white' 
      style={formStyle.placeholderStyle} 
      placeholder="Enter text here" 
      selectionColor='red'
      keyboardAppearance='dark'
      labelTextColor='white'
      
      />
      

    <Text style={formStyle.label}>Urgency Level: </Text>
    <ModalDropdown
      style={{margin: 20, color: 'white'}}
      color={'white'}
      options={["Very important", "Important", "Not important"]}
      dropdownStyle={styles.container}
      textStyle={styles.text}
    />
    <TouchableOpacity onPress={() => navigation.navigate("TeamInfo")}>
      <Text style={mainStyle.bigText}>Send Notification </Text>
    </TouchableOpacity>

    <Text style={formStyle.label}>Current Notifications </Text>
    <Text style={formStyle.label}>Time: </Text>
    <Text style={formStyle.label}>Message: </Text>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  </View>
);
