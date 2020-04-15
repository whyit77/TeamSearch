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
import React, { Component } from "react";
import logout from "../components/logout";
import Alert from "react-native";

// const logout = () => {
//   const username = "test3";

//   let requestBody = {
//     query: `
//         query logout($username: String!) {
//           logout(username: $username) {

//           }
//         }
//       `,
//     variables: {
//       username: username
//     }
//   };

//   // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
//   fetch("http://192.168.1.11:3000/graphql", {
//     method: "POST",
//     body: JSON.stringify(requestBody),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(async res => {
//       const responseJson = await res.json();
//       console.log(responseJson);

//       if (res.ok) {
//         console.log("Okay LOGOUT");
//         this.props.navigation.navigate("Login");
//         return responseJson;
//       }

//       // this.setState({ error: responseJson.errors[0].message });
//       throw new Error(responseJson.error);
//     })
//     // .then(resData => {
//     //   if (resData.data.login.token) {
//     //     //////////////
//     //     this.context.Login(
//     //       resData.data.login.token,
//     //       resData.data.login.userId,
//     //       resData.data.login.tokenExpiration
//     //     );
//     //   }
//     // })
//     .catch(err => {
//       console.log(err);
//     });
// };

const RootDrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginStack
    },
    // ResetPassword: {
    //     screen: ResetPasswordStack,
    //     navigationOptions: {
    //         title: 'Reset Password'

    //     }
    // },
    FirstTimeUserCreation: {
      screen: FirstTimeUserCreationStack,
      navigationOptions: {
        title: "Create Account"
      }
    },
    TeamListView: {
      screen: TeamListStack,
      navigationOptions: {
        title: "Team List"
      }
      //   contentOptions: {
      //     onItemPress: () => console.log("test")
      //   }
    },
    CreateNewGroup: {
      screen: CreateGroupStack,
      navigationOptions: {
        title: "Create Team"
      }
    },
    TeamInfo: {
      screen: TeamInfoStack,
      navigationOptions: {
        title: "Team Info"
      }
    },
    TeamMemberList: {
      screen: TeamMemberListStack,
      navigationOptions: {
        title: "Team Member List"
      }
    },
    MapView: {
      screen: MapViewStack,
      navigationOptions: {
        title: "Heatmap"
      }
    },
    TeamAlerts: {
      screen: TeamAlertsStack,
      navigationOptions: {
        title: "Team Alerts"
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        title: "Settings"
      }
    }
    // Logout: {
    //   // screen: logout,
    //   contentOptions: {
    //     onItemPress: () => Alert.alert("LOGOUT?")
    //   },
    //   navigationOptions: {
    //     title: "Logout"
    //   }
    // }
  },
  {
    drawerBackgroundColor: "#292929",
    contentOptions: {
      activeTintColor: "red",
      activeBackgroundColor: "#3d3d3d",
      inactiveTintColor: "white",
      inactiveBackgroundColor: "#292929"
    }
  }
);

export default createAppContainer(RootDrawerNavigator);
