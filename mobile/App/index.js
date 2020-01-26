// REBECCA
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer, AppRegistry } from "react-navigation";
// import {
//   ScrollView,
//   StatusBar,
//   Button,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   SafeAreaView
// } from "react-native";
// import React, { Component } from "react";
// // import SafeAreaView from "react-native-safe-area-view";

// import TeamMemberList from "./screens/TeamMemberList";
// import TeamInfo from "./screens/TeamInfo";
// import MemberProfile from "./screens/MemberProfile";
// import DataExport from "./screens/DataExport";
// import Map from "./screens/Map";
// import TeamAlerts from "./screens/TeamAlerts";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white"
//   }
// });

// const MainStack = createStackNavigator({
//   TeamInfo: {
//     screen: TeamInfo,
//     navigationOptions: {
//       headerTitle: "Team Information"
//     }
//   },
//   DataExport: {
//     screen: DataExport,
//     navigationOptions: {
//       headerTitle: "Export Data"
//     }
//   },
//   Map: {
//     screen: Map,
//     navigationOptions: {
//       headerTitle: "Map"
//     }
//   },
//   TeamAlerts: {
//     screen: TeamAlerts,
//     navigationOptions: {
//       headerTitle: "Team Alerts"
//     },
//     TeamMemberList: {
//       screen: TeamMemberList,
//       navigationOptions: {
//         headerTitle: "Team Member List"
//       }
//     },
//     MemberProfile: {
//       screen: MemberProfile,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: "Member Information"
//       })
//     }
//   }
// });

// export default createAppContainer(MainStack);

// class App extends Component {
//   render() {
//     return <View style={styles.container}></View>;
//   }
// }
// // App/index.js
// KYLE
// // This will become the settings screen

// import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from "react-navigation";

// import settingsIndex from "./screens/settingsIndex";

// import settings from "./screens/settings";
// import teamSettings from "./screens/teamSettings";
// import userSettings from "./screens/userSettings";
// import teamList from "./screens/teamList";
// import createPin from "./screens/createPin";
// import pinInfo from "./screens/pinInfo";

// import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

// const MainStack = createStackNavigator({
//   settingsIndex: {
//     screen: settingsIndex,
//     navigationOptions: {
//       headerTitle: "Settings"
//     }
//   },

//   settings: {
//     screen: settings,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: "Settings",
//       headerTintColor: "black",
//       headerStyle: {
//         backgroundColor: navigation.getParam("color"),
//         borderBottomColor: navigation.getParam("color")
//       }
//     })
//   },
//   userSettings: {
//     screen: userSettings,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: "User Settings",
//       headerTintColor: "black",
//       headerStyle: {
//         backgroundColor: navigation.getParam("color"),
//         borderBottomColor: navigation.getParam("color")
//       }
//     })
//   },
//   teamSettings: {
//     screen: teamSettings,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: "Team Settings",
//       headerTintColor: "black",
//       headerStyle: {
//         backgroundColor: navigation.getParam("color"),
//         borderBottomColor: navigation.getParam("color")
//       }
//     })
//   },
//   teamList: {
//     screen: teamList,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: "Team List",
//       headerTintColor: "black",
//       headerStyle: {
//         backgroundColor: navigation.getParam("color"),
//         borderBottomColor: navigation.getParam("color")
//       }
//     })
//   },
//   createPin: {
//     screen: createPin,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: "Create Pin",
//       headerTintColor: "black",
//       headerStyle: {
//         backgroundColor: navigation.getParam("color"),
//         borderBottomColor: navigation.getParam("color")
//       }
//     })
//   },
//   pinInfo: {
//     screen: pinInfo,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: "Pin Info",
//       headerTintColor: "black",
//       headerStyle: {
//         backgroundColor: navigation.getParam("color"),
//         borderBottomColor: navigation.getParam("color")
//       }
//     })
//     export default createAppContainer(MainStack);

///////////////////////////////////////////////////////
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Screen0 from "./screens/screen0-test";
import Login from "./screens/login";
import Reset_pw from "./screens/reset_pw";
import Create_acc from "./screens/create_acc";
import Team_list from "./screens/team_list_view";
import Create_team from "./screens/create_team";
import Define_area from "./screens/define_area";

const MainStack = createStackNavigator({
  Screen0: {
    screen: Screen0,
    navigationOptions: {
      headerTitle: "For Testing"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Login"
    }
  },
  Reset_pw: {
    screen: Reset_pw,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  },
  Create_acc: {
    screen: Create_acc,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  Team_list: {
    screen: Team_list,
    navigationOptions: {
      headerTitle: "Team List View"
    }
  },
  Create_team: {
    screen: Create_team,
    navigationOptions: {
      headerTitle: "New Team"
    }
  },
  Define_area: {
    screen: Define_area,
    navigationOptions: {
      headerTitle: "Define Search Area"
    }
  }
});
