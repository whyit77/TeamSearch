import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./screens/login";
import Reset_pw from "./screens/reset_pw";
import Create_acc from "./screens/create_acc";
import Screen0 from "./screens/screen0-test";

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
  }
});

export default createAppContainer(MainStack);
