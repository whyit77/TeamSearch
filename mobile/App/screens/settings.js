// App/screens/settings.js

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { RowItem } from "../Components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="User Settings"
      color="black"
      onPress={() => navigation.navigate("userSettings")}
    />
    <RowItem
      name="Team Settings"
      color="black"
      onPress={() => navigation.navigate("teamSettings")}
    />
  </ScrollView>
);
