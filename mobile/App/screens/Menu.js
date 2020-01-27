// App/screens/menu.js

//HAMBURGER MENU
import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Team List"
      color="black"
      onPress={() => navigation.navigate("TeamListView")}
    />

    <RowItem />

    <Text style={{ backgroundColor: "white", alignSelf: "center" }}>
      Team Name
    </Text>

    <RowItem
      name="Team Info"
      color="black"
      onPress={() => navigation.navigate("TeamInfo")}
    />
    <RowItem
      name="Team Members"
      color="black"
      onPress={() => navigation.navigate("TeamMemberList")}
    />
    <RowItem
      name="Map View"
      color="black"
      onPress={() => navigation.navigate("Map")}
    />
    <RowItem
      name="Team Alerts"
      color="black"
      onPress={() => navigation.navigate("TeamAlerts")}
    />

    <RowItem />

    <RowItem
      name="Settings"
      color="black"
      onPress={() => navigation.navigate("settings")}
    />
  </ScrollView>
);
