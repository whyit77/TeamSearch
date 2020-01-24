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

import TeamMemberList from "./screens/TeamMemberList";
import TeamInfo from "./screens/TeamInfo";
import MemberProfile from "./screens/MemberProfile";
import DataExport from "./screens/DataExport";
import Map from "./screens/Map";

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
  //   screen: TeamMemberList,
  //   navigationOptions: {
  //     headerTitle: "Team Member List"
  //   }
  // },
  // MemberProfile: {
  //   screen: MemberProfile,
  //   navigationOptions: ({ navigation }) => ({
  //     headerTitle: "Member Information"
  //   })
  // },
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
  }
});

export default createAppContainer(MainStack);

class App extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}
