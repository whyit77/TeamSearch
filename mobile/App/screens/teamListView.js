import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";
import { TeamList } from '../Components/TeamList';
import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 200,
    color: "white",
    textAlign: "center"
  }
});

export default class TeamListView extends React.Component {
  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <View style={mainStyle.container}>
      <ScrollView contentContainerStyle={mainStyle.container}>
      <View style={mainStyle.toplevel}>
        
        <TouchableOpacity>
          <TeamList name={'TeamSearch'} status={'Active'} admin={'Dr. Dan'} size={20} description={'Small boi'}></TeamList>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("CreateTeam")} >
          
          <Text style={styles.text}>+</Text>

        </TouchableOpacity>
      </View>

      </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}
