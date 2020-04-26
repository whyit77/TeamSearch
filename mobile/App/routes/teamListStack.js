import { createStackNavigator } from "react-navigation-stack";
import TeamListView from "../screens/TeamList";
import CreateTeam from "../screens/CreateTeam";
// import TeamInfo from "../screens/TeamInformation";
// import TeamInfoStack from "./teamInfoStack";
import Header from "../components/Header";
import React from "react";

const screens = {
  TeamListView: {
    screen: TeamListView,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Team List" />,
      };
    },
  },
  CreateTeam: {
    screen: CreateTeam,
    // navigationOptions: ({ navigation }) => {
    //   return {
    //     headerTitle: () => (
    //       <Header navigation={navigation} title="Create Team" />
    //     )
    //   };
    // }
    navigationOptions: () => {
      return {
        headerTitle: "Create Team",
        headerTintColor: "white",
      };
    },
  },
  // TeamInfo: {
  //   screen: TeamInfo,
  //   navigationOptions: () => {
  //     return {
  //       headerTitle: "Team Info",
  //       headerTintColor: "white"
  //     };
  //   }
  // }
  // TeamInfo: {
  //   screen: TeamInfo,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //       headerTitle: () => <Header navigation={navigation} title="Team Info" />
  //     };
  //   }
  // }
};

const TeamListStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 },
  },
});

export default TeamListStack;
