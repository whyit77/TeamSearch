import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import Header from "../components/Header";
import React from "react";
import TeamList from "../screens/TeamList";
import ResetPW from "../screens/ResetPassword";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: () => {
      return {
        headerTitle: "Login",
        headerTintColor: "white"
      };
    }
  },
  TeamList: {
    screen: TeamList,
    navigationOptions: () => {
      return {
        headerTitle: "Team List",
        headerTintColor: "white"
      };
    }
  },
  ResetPW: {
    screen: ResetPW,
    navigationOptions: () => {
      return {
        headerTitle: "Reset Password",
        headerTintColor: "white"
      };
    }
  }
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 }
  }
});

export default LoginStack;
