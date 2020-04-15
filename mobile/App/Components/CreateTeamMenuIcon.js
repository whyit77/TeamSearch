import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Menu, { MenuItem } from "react-native-material-menu";
import { MaterialIcons } from "@expo/vector-icons";
import DialogInput from "react-native-dialog-input-custom";
import { ErrorText } from "./Form";

import { B1, B2, B3 } from "../styles/styles";

export default class CreateTeamMenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      teamId: "",
      code: "",
      creator: "",
      error: "",
      dialogIsVisible: false,
    };
  }

  async fetchCurrentUser() {
    console.log("fetchCurrentUser");

    let requestBody = {
      query: `
        query {
          me {
            userId
            username
          }
        }
      `, // me query pulls first person in database
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.9:3000/graphql", {
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
          // set current logged in user in state
          const userId = responseJson.data.me.userId;

          this.setState({
            userId: userId,
          });

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // set currently selected team
  setTeam = (teamId) => {
    const userId = this.state.userId;

    let requestBody = {
      query: `
        mutation setTeam($userId: String!, $teamId: String!) {
          setTeam(userId: $userId, teamId: $teamId) {
            userId
            username
            teamId
          }
        }
      `,
      variables: {
        userId: userId,
        teamId: teamId,
      },
    };
    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.9:3000/graphql", {
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
          console.log("Okay CURRENT TEAM");
          this.props.option2Click(); // nav to team info screen
          return responseJson;
        }

        this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchJoinTeam(teamCode) {
    console.log(teamCode);
    const userId = this.state.userId;

    let requestBody = {
      query: `
          mutation joinTeam($userId: String!, $teamCode: String!) {
            joinTeam(userId: $userId, teamCode: $teamCode) {
              _id
              code
              creator {
                username
              }
            }
          }`,
      variables: {
        userId: userId,
        teamCode: teamCode,
      },
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.9:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();
        console.log(responseJson);

        if (responseJson.data.joinTeam == null) {
          this.setState({
            error: responseJson.errors[0].message,
            dialogIsVisible: true, // re-show dialog box if error
          });

          console.log(this.state.error);

          return responseJson;
        }

        if (res.ok) {
          const teamId = responseJson.data.joinTeam._id;
          const code = responseJson.data.joinTeam.code;
          const creator = responseJson.data.joinTeam.creator.username;

          this.setState({
            teamId: teamId,
            code: code,
            creator: creator,
          });

          console.log("JOINED");
          console.log(this.state.code);
          this._menu.hide();
          // this.props.option2Click(this.state.teamId);
          this.setTeam(teamId); // set as current team

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    // TODO: GET LOGGED IN USER ID //
    // const userId = "5e914c8d4d7ca83308289294";
    // this.setState({ userId: userId });
    this.fetchCurrentUser();
    console.log("mount");
  }

  _menu = null;
  setMenuRef = (ref) => {
    this._menu = ref;
  };
  showMenu = () => {
    this._menu.show();
  };
  hideMenu = () => {
    this._menu.hide();
  };
  option1Click = () => {
    this._menu.hide();
    this.props.option1Click();
  };
  option2Click = () => {
    this.setState({ dialogIsVisible: true });
  };
  render() {
    return (
      <View style={this.props.menustyle}>
        <Menu
          ref={this.setMenuRef}
          button={
            <TouchableOpacity onPress={this.showMenu}>
              <MaterialIcons
                name="add"
                size={40}
                style={{ color: "white", marginRight: 10 }}
              />
            </TouchableOpacity>
          }
        >
          <MenuItem onPress={this.option1Click}>{this.props.option1}</MenuItem>
          <MenuItem onPress={this.option2Click}>{this.props.option2}</MenuItem>
          <View style={styles.container}>
            <DialogInput
              dialogIsVisible={this.state.dialogIsVisible}
              closeDialogInput={() => this.setState({ dialogIsVisible: false })}
              submitInput={(textValue) => this.fetchJoinTeam(textValue)}
              outerContainerStyle={{ backgroundColor: "rgba(0,0,0, 0.75)" }}
              containerStyle={{
                backgroundColor: B3,
                borderColor: "#590900",
                borderWidth: 5,
              }}
              titleStyle={{ color: "white" }}
              title="Join a Team"
              subTitleStyle={{ color: "white" }}
              subtitle="Please enter the team code"
              placeholderInput={
                this.state.error == "" ? "Team Code" : this.state.error
              }
              placeholderTextColor={this.state.error == "" ? "grey" : "red"}
              textInputStyle={{
                color: "black",
                borderColor: "black",
                borderWidth: 2,
                marginBottom: 20,
              }}
              autoCapitalize={false}
              autoCorrect={false}
              secureTextEntry={false}
              buttonsStyle={{ borderColor: "white" }}
              textCancelStyle={{ color: "white", marginVertical: 3 }}
              submitTextStyle={{ color: "white" }}
              cancelButtonText="Cancel"
              submitButtonText="Join"
            />
          </View>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
