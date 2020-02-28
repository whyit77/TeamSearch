import React, { Component } from "react";
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  StatusBar
   } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { TeamMember } from "../Components/TeamMember";
import { mainStyle } from "../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import TeamMemberListAddButton from '../Components/TeamMemberListAddButton';

// Necessary to extract how many team members are currently in a team and then make rows for all members
export default class TeamMemberList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (  
        <TeamMemberListAddButton />
      ),
    }
  };
  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <ScrollView>
      <TeamMember nav={() => navigation.navigate("MemberProfile")} avatar={null} initial='JD' fname={'John'} lname={'Doe'} role={'Search'}> </TeamMember>
      <Text style={styles.text}> Team Member 1 </Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("MemberProfile")}>
        <Text style={styles.text}> View Profile </Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 15,
    textAlign: "center",

    fontWeight: "600"
  }
});