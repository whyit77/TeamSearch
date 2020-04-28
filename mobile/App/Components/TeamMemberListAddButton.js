import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import Menu, { MenuItem } from "react-native-material-menu";
import { MaterialIcons } from "@expo/vector-icons";
import DialogInput from "react-native-dialog-input-custom";

import { Button } from "react-native-dialog-input-custom/components/button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const screen = Dimensions.get("screen");

export default class TeamMemberListAddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      teamId: "",
      code: "",
      creator: "",
      error: "",
      dialogIsVisible: false,
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
        teamId: teamId,
      },
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

        if (responseJson.data.addUserToTeam == null) {
          this.setState({
            error: responseJson.errors[0].message,
            dialogIsVisible: true, // re-show dialog box if error
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
            creator: creator,
          });

          console.log("ADDED");
          this.props.option1Click(this.state.teamId);

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
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
        {/* <View alignSelf={'flex-start'} overflow={"hidden"}> */}
        <TouchableOpacity
          style={{ marginTop: screen.height / 25 }}
          onPress={this.option1Click}
        >
          <MaterialIcons
            name="add"
            size={40}
            style={{
              color: "white",
              marginRight: 15,
              marginBottom: 30,
              paddingBottom: 40,
            }}
          />
        </TouchableOpacity>
        {/* </View> */}
        <View style={styles.container}>
          <KeyboardAwareScrollView extraScrollHeight={50}>
            <DialogInput
              dialogIsVisible={this.state.dialogIsVisible}
              closeDialogInput={() => this.setState({ dialogIsVisible: false })}
              submitInput={(textValue) => this.fetchAddMember(textValue)}
              outerContainerStyle={{ backgroundColor: "rgba(0,0,0, 0.50)" }}
              containerStyle={{
                backgroundColor: "#3d3d3d",
                borderColor: "#3d3d3d",
                borderWidth: 8,
                padding: -120,
              }}
              titleStyle={{ color: "white" }}
              title="Add a Team Member"
              subTitleStyle={{
                color: "white",
                fontSize: 13,
                marginTop: 6,
                marginBottom: -10,
              }}
              subtitle="Please enter the username of the team member you wish to add"
              placeholderInput={
                this.state.error == "" ? "Team Member" : this.state.error
              }
              placeholderTextColor={this.state.error == "" ? "grey" : "red"}
              textInputProps={{
                autoCorrect: false,
                autoCapitalize: false,
              }}
              textInputStyle={{
                color: "white",
                borderColor: "#292929",
                borderWidth: 2,
                marginBottom: 20,
                backgroundColor: "#292929",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                selctionColor: "red",
                autoCorrect: false,
                spellCheck: false,
              }}
              spellCheck={false}
              secureTextEntry={false}
              keyboardAppearance="dark"
              // buttonsStyle={{ borderColor: "white", borderWidth: 2 }}

              textCancelStyle={{ color: "white" }}
              submitTextStyle={{ color: "white" }}
              cancelButtonText="Cancel"
              submitButtonText="Add"
            />
          </KeyboardAwareScrollView>
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
    backgroundColor: "#F5FCFF",
  },
});
