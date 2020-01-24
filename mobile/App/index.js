// App/index.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";

import settingsIndex from "./screens/settingsIndex";
import settings from "./screens/settings";
import teamSettings from "./screens/teamSettings";


const MainStack = createStackNavigator({
  settingsIndex: {
    screen: settingsIndex,
    navigationOptions: {
      headerTitle: "Settings"
    }
  },
  teamSettings: {
    screen: teamSettings,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});

export default createAppContainer(MainStack);