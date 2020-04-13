import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Menu, { MenuItem } from "react-native-material-menu";
import { MaterialIcons } from "@expo/vector-icons";
import DialogInput from "react-native-dialog-input-custom";
import { Button } from "react-native-dialog-input-custom/components/button";

export default class TeamMemberListAddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      teamId: "",
      code: "",
      creator: "",
      error: "",
      dialogIsVisible: false
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
      ` // me query pulls first person in database
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
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
          // set currently selected team in state
          const teamId = responseJson.data.me.teamId;

          this.setState({
            teamId: teamId
          });

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchAddMember(username) {
    console.log(username);
    const teamId = this.state.teamId;
    // const teamId = "5e9189523778984ecc120f3c";
    console.log(teamId);
    this.setState({ username: username, teamId: teamId });

    let requestBody = {
      query: `
              mutation addUserToTeam($username: String!, $teamId: String!) {
                addUserToTeam(username: $username, teamId: $teamId) {
                  _id
                  code
                  creator {
                    username
                  }
                }
              }`,
      variables: {
        username: username,
        teamId: teamId
      }
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.11:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const responseJson = await res.json();
        console.log(responseJson);

        if (responseJson.data.addUserToTeam == null) {
          this.setState({
            error: responseJson.errors[0].message,
            dialogIsVisible: true // re-show dialog box if error
          });

          console.log(this.state.error);

          return responseJson;
        }

        if (res.ok) {
          //   const teamId = responseJson.data.joinTeam._id;
          const code = responseJson.data.addUserToTeam.code;
          const creator = responseJson.data.addUserToTeam.creator.username;

          this.setState({
            code: code,
            creator: creator
          });

          console.log("ADDED");
          this.props.option1Click(this.state.teamId);

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // TODO: ONLY CREATOR CAN ADD MEMBERS???? //

  componentDidMount() {
    this.fetchCurrentTeam();
    console.log("mount");
  }

  option1Click = () => {
    this.setState({ dialogIsVisible: true });
  };

  render() {
    return (
      <View style={this.props.menustyle}>
        <Button onPress={this.option1Click}>
          <MaterialIcons name="add" size={40} style={{ color: "white" }} />
        </Button>
        <View style={styles.container}>
          <DialogInput
            dialogIsVisible={this.state.dialogIsVisible}
            closeDialogInput={() => this.setState({ dialogIsVisible: false })}
            submitInput={textValue => this.fetchAddMember(textValue)}
            outerContainerStyle={{ backgroundColor: "rgba(0,0,0, 0.75)" }}
            containerStyle={{ backgroundColor: "rgba(255,0,0, 0.2)" }}
            titleStyle={{ color: "white" }}
            title="Add a Team Member"
            subTitleStyle={{ color: "white" }}
            subtitle="Please enter the username of the team member you wish to add"
            placeholderInput={
              this.state.error == "" ? "Team Member" : this.state.error
            }
            placeholderTextColor={this.state.error == "" ? "grey" : "red"}
            textInputStyle={{
              color: "black",
              borderColor: "black",
              borderWidth: 2,
              marginBottom: 20
            }}
            secureTextEntry={false}
            buttonsStyle={{ borderColor: "white" }}
            textCancelStyle={{ color: "white" }}
            submitTextStyle={{ color: "white" }}
            cancelButtonText="Cancel"
            submitButtonText="Add"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
