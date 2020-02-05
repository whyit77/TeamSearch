import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView
} from "react-native";import SafeAreaView from "react-native-safe-area-view";

import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'

import { Avatar } from "react-native-elements";

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
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled>

      <ScrollView contentContainerStyle={mainStyle.container}>
      <Avatar
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 1, marginLeft: 20, marginTop: 20}}
        />


      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default MemberProfile;
