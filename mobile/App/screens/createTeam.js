import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { mainStyle, formStyle } from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";
import { ImageField } from "../components/Image";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const initialState = {
  teamName: "",
  searchDescription: "",
  subjectDescription: "",
  radius: 0,
  // code: "",
  // creator: "",
  error: "",
};

export default class CreateTeam extends React.Component {
  state = initialState;

  handleSubmit = () => {
    const teamName = this.state.teamName;
    const searchDescription = this.state.searchDescription;
    const subjectDescription = this.state.subjectDescription;
    const radius = parseInt(this.state.radius, 10);

    console.log(radius);

    // TODO: NEED CURRENT LOGGED IN USER ID ///
    const userId = "admin";

    let requestBody = {
      query: `
          mutation createTeam($userId: String!, $teamName: String!, $searchDescription: String!, $subjectDescription: String!, $radius: Int!) {
            createTeam(userId: $userId, teamInput: { teamName: $teamName, searchDescription: $searchDescription, subjectDescription: $subjectDescription, radius: $radius}) {
              _id
              teamName
              searchDescription
              subjectDescription
              radius
            }
          }
        `,
      variables: {
        userId: userId,
        teamName: teamName,
        searchDescription: searchDescription,
        subjectDescription: subjectDescription,
        radius: radius,
      },
    };

    // CHECK IP ADDRESS ///////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.8:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const responseJson = await res.json();

        console.log(responseJson);

        ////////// VERIFY INPUT ////////////
        if (responseJson.data.createTeam == null) {
          this.setState({ error: responseJson.errors[0].message });

          // CHECK if fields missing
          if (this.state.error.includes("Team validation failed")) {
            this.setState({
              error: "Team not created: required fields missing.",
            });
          }
          // // CHECK if radius is empty
          // if (this.state.radius == "") {
          //   this.setState({
          //     error: "Team not created: required fields missing."
          //   });
          // }
          // CHECK if radius is 0
          // if (radius == 0) {
          //   this.setState({
          //     error: "Team not created: radius cannot be 0."
          //   });
          // }

          console.log(this.state.error);
          return responseJson;
        }

        // CHECK if radius is 0
        if (radius == 0) {
          this.setState({
            error: "Team not created: radius cannot be 0.",
          });

          console.log(this.state.error);
          return responseJson;
        }

        if (res.ok) {
          console.log("Okay CREATE");
          this.props.navigation.navigate("TeamInfo");
          ///// TODO: ADD TEAM ID TO CONTEXT TO KNOW WHAT TEAM WE'RE LOOKING AT /////
          this.setState(initialState);
          return responseJson;
        }

        this.setState(initialState);
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <KeyboardAwareScrollView extraScrollHeight={50}>
          <ScrollView contentContainerStyle={formStyle.formContainer}>
            <View style={formStyle.formContainer}>
              {/* <Text style={mainStyle.text}>PHOTO UPLOAD</Text> */}
              {/* <ImageField
                imageStyles={{ width: 60, height: 60 }}
                source={{
                  uri:
                    "https://i.ya-webdesign.com/images/white-camera-png-7.png"
                }}
                bottomLabel="Add/Change Photo"
                onBottomPress={() =>
                  Alert.alert("Navigate to Change Photo Page")
                }
                bottomLabelStyles={mainStyle.link}
              /> */}
              <Text style={formStyle.label}>Team Name</Text>
              <TextField
                placeholder={"Name your team"}
                onChangeText={(teamName) => this.setState({ teamName })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                autoCapitalize="words"
              />
              {/* <Text style={formStyle.label} >Team Code: {this.state.code}</Text> */}
              {/* <TextField
            //label="Team Code"
            onChangeText={teamCode => this.setState({ teamCode })}
            value={this.state.teamCode}
            autoCapitalize="none"
            placeholder='XXXXX'
            style={formStyle.placeholderStyle}
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
            labelTextColor='white'
            keyboardType='number-pad'
            maxLength={5}
          /> */}
              <Text style={formStyle.label}>Search Description</Text>
              <TextField
                //label="Search Description"
                placeholder="What is the situation?"
                onChangeText={(searchDescription) =>
                  this.setState({ searchDescription })
                }
                value={this.state.searchDescription}
                autoCapitalize="sentences"
                scrollEnabled={true}
                multiline={true}
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                maxLength={300}
              />
              <Text style={formStyle.label}>Subject Description</Text>
              <TextField
                //label="Subject Description"
                placeholder="What are you looking for?"
                onChangeText={(subjectDescription) =>
                  this.setState({ subjectDescription })
                }
                value={this.state.subjectDescription}
                autoCapitalize="sentences"
                scrollEnabled={true}
                multiline={true}
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                maxLength={300}
              />
              <Text style={formStyle.label}>Search Radius (miles)</Text>
              <TextField
                //label="Search Radius"
                placeholder="Area to cover?"
                onChangeText={(radius) => this.setState({ radius })}
                value={this.state.radius}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                keyboardType="phone-pad"
              />
              <ErrorText text={this.state.error} />
              <View style={mainStyle.container}>
                <Button
                  style={formStyle.formButton}
                  text="Create"
                  onPress={this.handleSubmit}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
