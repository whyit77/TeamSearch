import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Card } from "react-native-elements";

import { TeamMember } from "../components/TeamMember";
import { mainStyle } from "../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import TeamMemberListAddButton from "../components/TeamMemberListAddButton";
// import Avatar from '../components/Avatar';

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

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

// Necessary to extract how many team members are currently in a team and then make rows for all members
export default class TeamMemberList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: data
  //   };
  // }

  state = {
    data: [],
    username: ""
  };

  componentDidMount() {
    // TODO: GET CURRENT TEAM (selected from list) //
    const teamId = "5e815a1ff1088e659c4bddc5";

    let requestBody = {
      query: `
      query getTeam($teamId: String!) {
        getTeam(teamId: $teamId) {
          _id
          members {
            username
          }
        }
      }`,
      variables: {
        teamId: teamId
      }
    };

    console.log("fetching...");

    fetch("http://192.168.0.13:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const responseJson = await res.json();

        console.log(responseJson);

        if (res.ok) {
          console.log("Okay Fetched Team");

          const members = responseJson.data.getTeam.members;
          console.log(members);

          const names = [];
          for (let i = 0; i < members.length; i++) {
            names.push(members[i].username);
          }
          console.log(names);

          this.setState({
            data: names
          });

          return responseJson;
        }

        this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <TeamMemberListAddButton />
    };
  };

  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        {/* <ScrollView> */}
        <FlatList
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("MemberProfile")}
                // TODO: NEED TO PASS SELECTED MEMBER ID TO memberProfile page //
              >
                {/* <Text style={mainStyle.text}>{rowData}</Text> */}
                <Card
                  title={rowData}
                  image={{ url: "http://via.placeholder.com/160x160" }}
                  containerStyle={{ padding: 0, width: 160 }}
                />
                {/* <Text style={{ marginBottom: 10 }}>hello</Text>
                </Card> */}
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
        />
        {/* <TeamMember nav={() => navigation.navigate("MemberProfile")} avatar={null} initial='JD' fname={'John'} lname={'Doe'} role={'Search'}> </TeamMember>
      <Text style={styles.text}> Team Member 1 </Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("MemberProfile")}>
        <Text style={styles.text}> View Profile </Text>
      </TouchableOpacity> */}
        {/* </ScrollView> */}
      </SafeAreaView>
      //   <ScrollView>
      //     <TeamMember
      //       nav={() => navigation.navigate("MemberProfile")}
      //       avatar={null}
      //       initial="JD"
      //       fname={"John"}
      //       lname={"Doe"}
      //       role={"Search"}
      //     >
      //       {" "}
      //     </TeamMember>
      //     <Text style={styles.text}> Team Member 1 </Text>
      //     <TouchableOpacity
      //       onPress={() => this.props.navigation.navigate("MemberProfile")}
      //     >
      //       <Text style={styles.text}> View Profile </Text>
      //     </TouchableOpacity>
      //   </ScrollView>
      // </SafeAreaView>
      //   <ScrollView>
      //   <FlatList
      //     data={this.state.data}
      //     renderItem={({ item: rowData }) => {
      //       return (
      //         <TouchableOpacity onPress={() => this.props.navigation.navigate("MemberProfile")}>
      //         <Card
      //           title={null}
      //           image={{ url: "http://via.placeholder.com/160x160" }}
      //           containerStyle={{ padding: 0, width: 160 }}
      //         >
      //           <Text style={{ marginBottom: 10 }}>
      //             hello
      //           </Text>
      //         </Card>
      //         </TouchableOpacity>
      //       );
      //     }}
      //     keyExtractor={(item, index) => index}
      //   />
      //   <TeamMember nav={() => navigation.navigate("MemberProfile")} avatar={null} initial='JD' fname={'John'} lname={'Doe'} role={'Search'}> </TeamMember>
      //   <Text style={styles.text}> Team Member 1 </Text>
      //   <TouchableOpacity onPress={() => this.props.navigation.navigate("MemberProfile")}>
      //     <Text style={styles.text}> View Profile </Text>
      //   </TouchableOpacity>

      //   <TeamMember
      //         nav={() => navigation.navigate("MemberProfile")}
      //         avatar={null}
      //         initial="JD"
      //         fname={"John"}
      //         lname={"Doe"}
      //         role={"Search"}
      //       >
      //         {" "}
      //       </TeamMember>
      //       <Text style={styles.text}> Team Member 1 </Text>
      //       <TouchableOpacity
      //         onPress={() => this.props.navigation.navigate("MemberProfile")}
      //       >
      //         <Text style={styles.text}> View Profile </Text>
      //       </TouchableOpacity>
      //   </ScrollView>
      // </SafeAreaView>
    );
  }
}
