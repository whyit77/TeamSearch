import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { RowItem } from "../components/RowItem";

// import spaceQuestions from "../data/space";
// import westernsQuestions from "../data/westerns";
// import computerQuestions from "../data/computers";

// JSX, not class
// screen doesn't change
export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Login"
      color="#36b1f0"
      onPress={() => navigation.navigate("Login")}
    />
    <RowItem
      name="Reset Password"
      color="#799496"
      onPress={() => navigation.navigate("Reset_pw")}
    />
    <RowItem
      name="Create Account"
      color="#49475B"
      onPress={() => navigation.navigate("Create_acc")}
    />
  </ScrollView>
);
