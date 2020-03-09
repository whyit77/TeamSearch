import { createStackNavigator } from "react-navigation-stack";
import TeamInfo from "../screens/TeamInformation";
import DataExport from "../screens/DataExport";
import TeamAlerts from "../screens/TeamAlerts";
import HeatMap from "../screens/Map";
import Header from "../components/Header";
import React from "react";

const screens = {
  TeamInfo: {
    screen: TeamInfo,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Team Info" />
      };
    }
  },
  Map: {
    screen: HeatMap,
    navigationOptions: () => {
      return {
        headerTitle: "Map",
        headerTintColor: "white"
      };
    }
  },
  DataExport: {
    screen: DataExport,
    navigationOptions: () => {
      return {
        headerTitle: "Export Data",
        headerTintColor: "white"
      };
    }
  },
  TeamAlerts: {
    screen: TeamAlerts,
    navigationOptions: () => {
      return {
        headerTitle: "Team Alerts",
        headerTintColor: "white"
      };
    }
  }
};

const TeamInfoStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 }
  },
  initialRouteName: "TeamInfo"
});

export default TeamInfoStack;
