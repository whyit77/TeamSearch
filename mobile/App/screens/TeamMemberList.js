import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Card, Avatar } from "react-native-elements";
import { YellowBox } from "react-native";
import { TeamMember } from "../components/TeamMember";
import { mainStyle, B3, B2, B1 } from "../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import TeamMemberListAddButton from "../components/TeamMemberListAddButton";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationEvents } from "react-navigation";
// import Avatar from '../components/Avatar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 15,
    textAlign: "center",

    fontWeight: "600",
  },
});

// Necessary to extract how many team members are currently in a team and then make rows for all members
export default class TeamMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      teamId: "",
      teamName: "",
    };
  }

  async fetchCurrentTeam() {
    let requestBody = {
      query: `
        query {
          me {
            userId
            username
            teamId
          }
        }
      `, // me query pulls first person in database
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          // set currently selected team in state
          const teamId = responseJson.data.me.teamId;

          this.setState({
            teamId: teamId,
          });

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchTeamMember() {
    const teamId = this.state.teamId;
    // if (this.props.navigation.getParam("teamId") != null) {
    //   teamId = this.props.navigation.getParam("teamId");
    // }
    console.log(teamId);

    this.setState({ teamId: teamId });

    let requestBody = {
      query: `
      query getTeam($teamId: String!) {
        getTeam(teamId: $teamId) {
          _id
          teamName
          members {
            _id
            username
            firstName
            lastName
          }
        }
      }`,
      variables: {
        teamId: teamId,
      },
    };

    console.log("fetching...");
    console.disableYellowBox = true;

    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();

        console.log(responseJson);

        if (res.ok) {
          console.log("Okay Fetched Team");

          const teamName = responseJson.data.getTeam.teamName;
          const members = responseJson.data.getTeam.members;
          console.log(members);

          const names = [];
          for (let i = 0; i < members.length; i++) {
            names.push(members[i]);
            // first.push(members[i].firstName);
            // last.push(members[i].lastName);
          }
          console.log(names);

          this.setState({
            data: names,
            teamName: teamName,
          });

          return responseJson;
        }

        this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log("Mount");
    this.fetchCurrentTeam();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.teamId !== this.state.teamId) {
      console.log("UPDATING...");
      this.fetchTeamMember();
    }
  }

  static navigationOptions = ({ navigation }) => {
    // const t = this.state.teamId;

    return {
      headerRight: () => (
        <TeamMemberListAddButton
          // teamId={"5e9189523778984ecc120f3c"} ////////////////////////////
          option1Click={(team) =>
            navigation.navigate("TeamMemberList", { teamId: team })
          }
        />
      ),
    };
  };

  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <View style={mainStyle.container}>
          <Text style={mainStyle.bigText}>{this.state.teamName}</Text>
        </View>

        <FlatList
          data={this.state.data}
          numColumns={2}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("MemberProfile", {
                    memberId: rowData._id,
                  })
                }
              >
                <Card
                  title={rowData.firstName + " " + rowData.lastName}
                  titleStyle={{
                    alignItems: "flex-start",
                    marginTop: 10,
                    color: "white",
                  }}
                  // image={{ url: "http://via.placeholder.com/160x160" }}
                  containerStyle={{
                    padding: 0,
                    width: 160,
                    height: 160,
                    backgroundColor: B3,
                    borderRadius: 30,
                    borderWidth: 0,
                    borderColor: B1,
                  }}
                >
                  <Avatar
                    overlayContainerStyle={{
                      backgroundColor: B2,
                      borderBottomEndRadius: 25,
                      borderBottomStartRadius: 25,
                    }}
                    size="xlarge"
                    title={rowData.firstName[0] + rowData.lastName[0]}
                    containerStyle={{ marginTop: -17, width: 160 }}
                    titleStyle={{ color: "#5e5e5e" }}
                  />
                </Card>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index}
        />
        {/* <Text style={styles.text}> Team Member 1 </Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("MemberProfile")}>
        <Text style={styles.text}> View Profile </Text>
      </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
}
