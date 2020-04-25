import { createStackNavigator } from "react-navigation-stack";
import CreateAccount from "../screens/CreateAccount";
import Header from "../components/Header";
import React from "react";

const screens = {
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: () => {
      return {
        headerTitle: "Create Account",
        headerTintColor: "white",
      };
    },
  },
};

const FirstTimeUserCreationStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 },
  },
});

export default FirstTimeUserCreationStack;
