import { createStackNavigator } from "react-navigation-stack";
import TeamAlerts from "../screens/TeamAlerts";
import Header from "../components/Header";
import React from "react";

const screens = {
  TeamAlerts: {
    screen: TeamAlerts,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Team Alerts" />
        )
      };
    }
  }
};

const TeamAlertsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 }
  }
});

export default TeamAlertsStack;
