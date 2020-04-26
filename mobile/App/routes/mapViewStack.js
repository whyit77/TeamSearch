import { createStackNavigator } from "react-navigation-stack";
import MapView from "../screens/Map";
import PinInformation from "../screens/PinInformation";
import Header from "../components/Header";
import React from "react";

const screens = {
  MapView: {
    screen: MapView,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Heatmap" />,
      };
    },
  },
  PinInformation: {
    screen: PinInformation,
    navigationOptions: () => {
      return {
        headerTitle: "Pin Information",
        headerTintColor: "white",
      };
    },
  },
};

const MapViewStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#292929", height: 100 },
  },
  initialRouteName: "MapView",
});

export default MapViewStack;
