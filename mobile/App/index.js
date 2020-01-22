import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, AppRegistry } from "react-navigation";
import Header from './components/header';
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

import teamInfo from "./screens/teamInfo";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

const MainStack = createStackNavigator({
  TeamInfo: {
    screen: teamInfo,
    navigationOptions: {
      headerTitle: () => <Header/>,
    }
  },
});

export default createAppContainer(MainStack);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Welcome to TeamSearch! </Text>
      </SafeAreaView>
    );
  }
}