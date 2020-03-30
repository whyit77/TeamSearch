import { createStackNavigator } from "react-navigation-stack";
import PinInformation from "../screens/PinInformation";
import Header from "../components/Header";
import React from "react";

const screens = {
  PinInformation: {
    screen: PinInformation,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Pin Information" />
        )
      };
    }
  }
};

const PinInformationStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 }
  }
});

export default PinInformationStack;
