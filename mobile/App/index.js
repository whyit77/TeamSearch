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

export default createAppContainer(MainStack);
