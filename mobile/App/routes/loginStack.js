import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";
import TeamListView from "../screens/TeamList";
import CreateTeam from "../screens/CreateTeam";
import UserSettings from "../screens/UserSettings";

import Header from "../components/Header";
import React from "react";
import TeamList from "../screens/TeamList";
import HiddenDrawerItem from "../components/HiddenDrawerItem";
// import ResetPW from "../screens/ResetPassword";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: () => {
      return {
        headerTitle: "Login",
        headerTintColor: "white",
        drawerLabel: <HiddenDrawerItem />
      };
    }
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: ({ navigation }) => {
      // return {
      //   headerTitle: () => (
      //     <Header navigation={navigation} title="Create Account" />
      //   )
      return {
        headerTitle: "Create Account",
        headerTintColor: "white"
      };
    }
  },
  TeamListView: {
    screen: TeamListView,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Team List" />
      };
    }
  },
  CreateTeam: {
    screen: CreateTeam,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Create Team" />
        )
      };
    }
    // navigationOptions: () => {
    //   return {
    //     headerTitle: "Create Team",
    //     headerTintColor: "white"
    //   };
    // }
  },
  UserSettings: {
    screen: UserSettings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="User Profile" />
      };
    }
  }
  // TeamList: {
  //   screen: TeamList,
  //   navigationOptions: () => {
  //     return {
  //       headerTitle: "Team List",
  //       headerTintColor: "white"
  //     };
  //   }
  // }
  // ResetPW: {
  //   screen: ResetPW,
  //   navigationOptions: () => {
  //     return {
  //       headerTitle: "Reset Password",
  //       headerTintColor: "white"
  //     };
  //   }
  // }
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 }
  }
});

export default LoginStack;
