import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextField } from "../components/Form";
import { mainStyle, formStyle } from "../styles/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ({ navigation }) => (
  <SafeAreaView style={mainStyle.toplevel}>
    <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="padding"
      enabled
    >
      <ScrollView contentContainerStyle={formStyle.formContainer}>
        <View style={formStyle.formContainer}>
          <Text style={formStyle.label}>Search Description</Text>
          <TextField placeholder="Description" editable={false} />
          <Text style={formStyle.label}>Object Description</Text>
          <TextField placeholder="Object" editable={false} />
          <View style={formStyle.buttons}>
            <TouchableOpacity
              style={formStyle.formButton}
              onPress={() => navigation.navigate("Map")}
            >
              <Text style={mainStyle.smallText}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={formStyle.formButton}
              onPress={() => navigation.navigate("DataExport")}
            >
              <Text style={mainStyle.smallText}>Export Data</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={formStyle.formButton}
              onPress={() => navigation.navigate("TeamAlerts")}
            >
              <Text style={mainStyle.smallText}>Alerts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
