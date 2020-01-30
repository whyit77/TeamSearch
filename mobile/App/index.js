// Sprint 2 nav - WILL CHANGE

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// screens 0-7
import Screen0 from "./screens/screen0-test";
import Login from "./screens/login";
import ResetPW from "./screens/resetPW";
import CreateAcc from "./screens/createAcc";
import TeamListView from "./screens/teamListView";
import CreateTeam from "./screens/createTeam";
import DefineArea from "./screens/defineArea";
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
import createPin from "./screens/createPin";
import pinInfo from "./screens/pinInfo";

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
  ResetPW: {
    screen: ResetPW,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  },
  CreateAcc: {
    screen: CreateAcc,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  TeamListView: {
    screen: TeamListView,
    navigationOptions: {
      headerTitle: "Team List View"
    }
  },
  CreateTeam: {
    screen: CreateTeam,
    navigationOptions: {
      headerTitle: "New Team"
    }
  },
  DefineArea: {
    screen: DefineArea,
    navigationOptions: {
      headerTitle: "Define Search Area"
    }
  },
  TeamInfo: {
    screen: TeamInfo,
    navigationOptions: {
      headerTitle: "Team Information"
    }
  },
  DataExport: {
    screen: DataExport,
    navigationOptions: {
      headerTitle: "Export Data"
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      headerTitle: "Map"
    }
  },
  TeamAlerts: {
    screen: TeamAlerts,
    navigationOptions: {
      headerTitle: "Team Alerts"
    }
  },
  TeamMemberList: {
    screen: TeamMemberList,
    navigationOptions: {
      headerTitle: "Team Member List"
    }
  },
  MemberProfile: {
    screen: MemberProfile,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Member Information"
    })
  },
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Menu",
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
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
  }
});

export default createAppContainer(MainStack);
