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
  Alert
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
  // code: "",
  // creator: "",
  error: ""
};

export default class CreateTeam extends React.Component {
  state = initialState;

  handleSubmit = () => {
    const teamName = this.state.teamName;
    const searchDescription = this.state.searchDescription;
    const subjectDescription = this.state.subjectDescription;

    let requestBody = {
      query: `
          mutation createTeam($teamName: String!, $searchDescription: String!, $subjectDescription: String!) {
            createTeam(teamInput: {teamName: $teamName, searchDescription: $searchDescription, subjectDescription: $subjectDescription}) {
              _id
              teamName
              searchDescription
              subjectDescription
            }
          }
        `,
      variables: {
        teamName: teamName,
        searchDescription: searchDescription,
        subjectDescription: subjectDescription
      }
    };

    // CHECK IP ADDRESS ///////////////////////////////////////////////////////////////////////////
    fetch(`http://${process.env.IP_ADDR}:3000/graphql`, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        const responseJson = await res.json();

        console.log(responseJson);

        ////////// VERIFY INPUT ////////////
        // if (responseJson.data.createUser == null) {
        //   this.setState({ error: responseJson.errors[0].message });

        //   // CHECK if fields missing
        //   if (this.state.error.includes("User validation failed")) {
        //     this.setState({
        //       error: "User validation failed: required fields missing."
        //     });
        //   }
        //   // CHECK if user exists
        //   if (this.state.error.includes("User exists already.")) {
        //     this.setState(initialState);
        //     this.setState({ error: "User exists already." });
        //   }
        //   // CHECK if passwords match
        //   if (this.state.error.includes("Passwords do not match!")) {
        //     this.setState({ password: "", repassword: "" });
        //   }
        //   // CHECK password length (>= 8 chars)
        //   if (
        //     this.state.error.includes(
        //       "Password must be at least 8 characters long."
        //     )
        //   ) {
        //     this.setState({ password: "", repassword: "" });
        //   }
        //   // CHECK phone number length (10 chars)
        //   if (this.state.error.includes("Phone number is invalid.")) {
        //     this.setState({ phone: "" });
        //   }

        //   console.log(this.state.error);
        //   return responseJson;
        // }

        if (res.ok) {
          console.log("Okay CREATE");
          this.props.navigation.navigate("DefineSearchArea");
          ///// TODO: ADD TEAM ID TO CONTEXT TO KNOW WHAT TEAM WE'RE LOOKING AT /////
          this.setState(initialState);
          return responseJson;
        }

        this.setState(initialState);
        throw new Error(responseJson.error);
      })
      .catch(err => {
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
              <Text style={mainStyle.text}>PHOTO UPLOAD</Text>
              <ImageField
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
              />
              <Text style={formStyle.label}>Team Name</Text>
              <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ teamName })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
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
                onChangeText={searchDescription =>
                  this.setState({ searchDescription })
                }
                value={this.state.searchDescription}
                autoCapitalize="none"
                scrollEnabled="true"
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
                onChangeText={subjectDescription =>
                  this.setState({ subjectDescription })
                }
                value={this.state.subjectDescription}
                autoCapitalize="none"
                scrollEnabled="true"
                multiline={true}
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                maxLength={300}
              />
              <View style={mainStyle.container}>
                <Button
                  style={formStyle.formButton}
                  text="Define Search Area"
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
