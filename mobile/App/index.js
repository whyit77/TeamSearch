import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, AppRegistry } from "react-navigation";
import {
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import React, { Component } from "react";
// import SafeAreaView from "react-native-safe-area-view";

import teamMemberList from "./screens/teamMemberList";
import teamInfo from "./screens/teamInfo";
import memberProfile from "./screens/memberProfile";
import dataExport from "./screens/dataExport";
import map from "./screens/map";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

const MainStack = createStackNavigator({
  // TeamMemberList: {
  //   screen: teamMemberList,
  //   navigationOptions: {
  //     headerTitle: "Team Member List"
  //   }
  // },
  // MemberProfile: {
  //   screen: memberProfile,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTitle: "Member Information"
  //   })
  // },
  TeamInfo: {
    screen: teamInfo,
    navigationOptions: {
      headerTitle: "Team Information"
    }
  },
  DataExport: {
    screen: dataExport,
    navigationOptions: {
      headerTitle: "Export Data"
    }
  },
  Map: {
    screen: map,
    navigationOptions: {
      headerTitle: "Map"
    }
  }
});

export default createAppContainer(MainStack);

class App extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}
