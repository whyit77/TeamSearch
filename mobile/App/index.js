// Sprint 2 nav - WILL CHANGE
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Button
} from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// screens 0-7
import Screen0 from "./screens/screen0-test";
import Login from "./screens/login";
import ResetPW from "./screens/resetPW";
import CreateAccount from "./screens/CreateAccount";
import TeamList from "./screens/TeamList";
import CreateTeam from "./screens/CreateTeam";
import DefineSearchArea from "./screens/DefineSearchArea";
// screens 8-13
import TeamMemberList from "./screens/TeamMemberList";
import TeamInfo from "./screens/TeamInfo";
import MemberProfile from "./screens/MemberProfile";
import DataExport from "./screens/DataExport";
import Map from "./screens/Map";
import TeamAlerts from "./screens/TeamAlerts";
// screens 14-19
import settings from "./screens/settings";
import teamSettings from "./screens/teamSettings";
import userSettings from "./screens/userSettings";
import Menu from "./screens/Menu";
import CreatePin from "./screens/CreatePin";
import pinInfo from "./screens/pinInfo";

// HEADER COLOR
let HEADER_COLOR ='#292929';
let WHITE = 'white';
let FONT_WEIGHT_HEADER = 'bold'

const MainStack = createStackNavigator({
  Screen0: {
    screen: Screen0,
    navigationOptions: {
      headerTitle: "Testing",
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Login",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  ResetPW: {
    screen: ResetPW,
    navigationOptions: {
      headerTitle: "Reset Password",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerTitle: "Create Account",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  TeamList: {
    screen: TeamList,
    navigationOptions: {
      headerTitle: "Team List View",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      navigationOptions: ({ navigation }) => ({
        headerTitle: "New Team"
      }),
      headerRight: ({navigation}) => (
        <TouchableOpacity onPress={() => alert('This is a button!')}>
          <Text style={{fontSize: 50, color: 'white', marginTop: -20, marginRight: 10}}>+</Text>
        </TouchableOpacity>
      ),
    },
    
  },
  CreateTeam: {
    screen: CreateTeam,
    navigationOptions: {
      headerTitle: "New Team",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  DefineSearchArea: {
    screen: DefineSearchArea,
    navigationOptions: {
      headerTitle: "Define Search Area",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  TeamInfo: {
    screen: TeamInfo,
    navigationOptions: {
      headerTitle: "Team Information",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  DataExport: {
    screen: DataExport,
    navigationOptions: {
      headerTitle: "Export Data",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      headerTitle: "Map",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  TeamAlerts: {
    screen: TeamAlerts,
    navigationOptions: {
      headerTitle: "Team Alerts",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  TeamMemberList: {
    screen: TeamMemberList,
    navigationOptions: {
      headerTitle: "Team Member List",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  MemberProfile: {
    screen: MemberProfile,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Member Profile",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      
    })
  },
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Menu",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      //headerBorderBottom: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  settings: {
    screen: settings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Settings",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      //headerBorderBottom: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    })
  },
  userSettings: {
    screen: userSettings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "User Settings",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  teamSettings: {
    screen: teamSettings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Team Settings",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  CreatePin: {
    screen: CreatePin,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Create Pin",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  pinInfo: {
    screen: pinInfo,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Pin Info",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: HEADER_COLOR,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  }
});

export default createAppContainer(MainStack);
