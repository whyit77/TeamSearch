import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Login"
      color="#9400D3"
      onPress={() => navigation.navigate("Login")}
    />
    <RowItem
      name="Reset Password"
      color="#4B0082"
      onPress={() => navigation.navigate("Reset_pw")}
    />
    <RowItem
      name="Create Account"
      color="#0000FF"
      onPress={() => navigation.navigate("Create_acc")}
    />
    <RowItem
      name="Team List"
      color="#00FF00"
      onPress={() => navigation.navigate("Team_list")}
    />
    <RowItem
      name="Create Team"
      color="#FFFF00"
      onPress={() => navigation.navigate("Create_team")}
    />
    <RowItem
      name="Define Search Area"
      color="#FF7F00"
      onPress={() => navigation.navigate("Define_area")}
    />
    <RowItem
      name="NEXT"
      color="#FF0000"
      //onPress={() => navigation.navigate("Define_area")}
    />
  </ScrollView>
);
