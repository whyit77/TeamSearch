// App/screens/menu.js
import { B1, B2, B3, buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'

//HAMBURGER MENU
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { RowItem } from "../Components/RowItem";

export default ({ navigation, teamName}) => (
  <View style={mainStyle.toplevel}>
  <ScrollView contentContainerStyle={formStyle.formContainer} >
  <StatusBar barStyle="light-content" />
    <RowItem
      name="Team List"
      color={B3}
      onPress={() => navigation.navigate("TeamList")}
    />

    {/* <RowItem /> */}

    <Text style={mainStyle.bigText}>
      Team Name
    </Text>

    <RowItem
      name="Team Info"
      color={B3}
      onPress={() => navigation.navigate("TeamInfo")}
    />
    <RowItem
      name="Team Members"
      color={B3}
      onPress={() => navigation.navigate("TeamMemberList")}
    />
    <RowItem
      name="Map View"
      color={B3}
      onPress={() => navigation.navigate("Map")}
    />
    <RowItem
      name="Team Alerts"
      color={B3}
      onPress={() => navigation.navigate("TeamAlerts")}
    />

    <RowItem />

    <RowItem
      name="Settings"
      color={B3}
      onPress={() => navigation.navigate("settings")}
    />
  </ScrollView>
  </View>
);
