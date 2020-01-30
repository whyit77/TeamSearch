import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { RowItem } from "../Components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Login"
      color="#cc0000"
      onPress={() => navigation.navigate("Login")}
    />
    <RowItem
      name="Reset Password"
      color="#ff3333"
      onPress={() => navigation.navigate("ResetPW")}
    />
    <RowItem
      name="Create Account"
      color="#ff6633"
      onPress={() => navigation.navigate("CreateAcc")}
    />
    <RowItem
      name="Team List"
      color="#ff9933"
      onPress={() => navigation.navigate("TeamListView")}
    />
    <RowItem
      name="Create Team"
      color="#ffbf00"
      onPress={() => navigation.navigate("CreateTeam")}
    />
    <RowItem
      name="Define Search Area"
      color="#ffff33"
      onPress={() => navigation.navigate("DefineArea")}
    />
    <RowItem
      name="Team Member List"
      color="#80ff00"
      onPress={() => navigation.navigate("TeamMemberList")}
    />
    <RowItem
      name="Team Info"
      color="#00ff00"
      onPress={() => navigation.navigate("TeamInfo")}
    />
    <RowItem
      name="Member Profile"
      color="#00e600"
      onPress={() => navigation.navigate("MemberProfile")}
    />
    <RowItem
      name="Data Export"
      color="#33ff99"
      onPress={() => navigation.navigate("DataExport")}
    />
    <RowItem
      name="Map"
      color="#33ffcc"
      onPress={() => navigation.navigate("Map")}
    />
    <RowItem
      name="Team Alerts"
      color="#33ffff"
      onPress={() => navigation.navigate("TeamAlerts")}
    />
    <RowItem
      name="Menu"
      color="#33ccff"
      onPress={() => navigation.navigate("Menu")}
    />
    <RowItem
      name="Settings"
      color="#3366ff"
      onPress={() => navigation.navigate("settings")}
    />
    <RowItem
      name="Team Settings"
      color="#3333ff"
      onPress={() => navigation.navigate("teamSettings")}
    />
    <RowItem
      name="User Settings"
      color="#9933ff"
      onPress={() => navigation.navigate("userSettings")}
    />
    <RowItem
      name="Create Pin"
      color="#cc33ff"
      onPress={() => navigation.navigate("createPin")}
    />
    <RowItem
      name="Pin Info"
      color="#ff33ff"
      onPress={() => navigation.navigate("pinInfo")}
    />
  </ScrollView>
);
