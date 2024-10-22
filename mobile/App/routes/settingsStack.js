import { createStackNavigator } from "react-navigation-stack";
import UserSettings from "../screens/UserSettings";
import Header from "../components/Header";
import React from "react";

const screens = {
  UserSettings: {
    screen: UserSettings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="User Profile" />
      };
    }
  }
};

const SettingsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 }
  }
});

export default SettingsStack;
