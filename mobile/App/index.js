// App/index.js

// This will become the settings screen

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";

import settingsIndex from "./screens/settingsIndex";

import settings from "./screens/settings";
import teamSettings from "./screens/teamSettings";
import userSettings from "./screens/userSettings";
import menu from "./screens/menu";
import createPin from "./screens/createPin";
import pinInfo from "./screens/pinInfo";

import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";


const MainStack = createStackNavigator({
  settingsIndex: {
    screen: settingsIndex,
    navigationOptions: {
      headerTitle: "Settings",

    }
  },

  settings: {
    screen: settings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Settings",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  userSettings: {
    screen: userSettings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "User Settings",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  teamSettings: {
    screen: teamSettings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Team Settings",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  menu: {
    screen: menu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Team List",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  createPin: {
    screen: createPin,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Create Pin",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
  pinInfo: {
    screen: pinInfo,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Pin Info",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  },
});


export default createAppContainer(MainStack);
