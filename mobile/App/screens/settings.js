// App/screens/settings.js

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { RowItem } from "../Components/RowItem";

import { B1, B2, B3, buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'


export default ({ navigation }) => (
  <View style={mainStyle.toplevel}>
  <ScrollView contentContainerStyle={formStyle.formContainer} >
  <StatusBar barStyle="light-content" />
    <RowItem
      name="User Settings"
      color={B3}
      onPress={() => navigation.navigate("userSettings")}
    />
    <RowItem
      name="Team Settings"
      color={B3}
      onPress={() => navigation.navigate("teamSettings")}
    />
  </ScrollView>
  </View>
);
