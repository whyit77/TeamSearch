import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Team } from '../components/Team';
import { mainStyle } from '../styles/styles'
import CreateTeamMenuIcon from '../components/CreateTeamMenuIcon';

export default class TeamList extends Component {
  state = {
    name: "",
    status: "",
    admin: "",
    size: "",
    description: ""
  }
  
    static navigationOptions = ({ navigation }) => {
      return {
        headerRight: (  
          <CreateTeamMenuIcon 
              option1="Create Team"
              option2="Join Team"
              menuStyle= {{
                  marginRight: 40,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
              }}
              option1Click={() => {
                  navigation.navigate('CreateTeam')
              }}
          />
        ),
      }
  };
  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <View style={mainStyle.container}>
      <ScrollView contentContainerStyle={mainStyle.container}>
      <View style={mainStyle.toplevel}>
        
        <TouchableOpacity>
          <Team name={'TeamSearch'} status={'Active'} admin={'Dr. Dan'} size={20} description={'Small boi'}></Team>
        </TouchableOpacity>
      </View>

      </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}

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
