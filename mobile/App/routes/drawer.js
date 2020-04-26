import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import LoginStack from "./loginStack";
import ResetPasswordStack from "./resetPasswordStack";
import FirstTimeUserCreationStack from "./firstTimeUserCreationStack";
import TeamListStack from "./teamListStack";
import CreateGroupStack from "./createNewGroupStack";
import TeamInfoStack from "./teamInfoStack";
import TeamMemberListStack from "./teamMemberListStack";
import MapViewStack from "./mapViewStack";
import TeamAlertsStack from "./teamAlertsStack";
import SettingsStack from "./settingsStack";
import Alert from "react-native";
import PinInformationStack from "./pinInformationStack";
import React, { Component } from "react";
import HiddenDrawerItem from "../components/HiddenDrawerItem";

const RootDrawerNavigator = createDrawerNavigator(
  {
    TeamListView: {
      screen: TeamListStack,
      navigationOptions: {
        title: "Team List",
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        title: "Settings",
      },
    },
    CreateNewGroup: {
      screen: CreateGroupStack,
      navigationOptions: {
        title: "Create Team",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    TeamInfo: {
      screen: TeamInfoStack,
      navigationOptions: {
        title: "Team Info",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    TeamMemberList: {
      screen: TeamMemberListStack,
      navigationOptions: {
        title: "Team Member List",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    MapView: {
      screen: MapViewStack,
      navigationOptions: {
        title: "Heatmap",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    PinInformation: {
      screen: PinInformationStack,
      navigationOptions: {
        title: "Pin Information",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    TeamAlerts: {
      screen: TeamAlertsStack,
      navigationOptions: {
        title: "Team Alerts",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    Login: {
      screen: LoginStack,
      navigationOptions: {
        title: "Login",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    ResetPassword: {
      screen: ResetPasswordStack,
      navigationOptions: {
        title: "Reset Password",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
    FirstTimeUserCreation: {
      screen: FirstTimeUserCreationStack,
      navigationOptions: {
        title: "Create Account",
        drawerLabel: <HiddenDrawerItem />,
      },
    },
  },
  {
    drawerBackgroundColor: "#292929",
    contentOptions: {
      activeTintColor: "red",
      activeBackgroundColor: "#3d3d3d",
      inactiveTintColor: "white",
      inactiveBackgroundColor: "#292929",
    },
  }
);

export default createAppContainer(RootDrawerNavigator);
