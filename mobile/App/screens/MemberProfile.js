import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";

import { Avatar } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class MemberProfile extends React.Component {
  state = {
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    phone: ""
  };

  componentDidMount() {
    // TODO: GET CURRENTLY SELECTED USER from teamMemberList page//
    const userId = "5e815389f1088e659c4bddc4";

    let requestBody = {
      query: `
          query getUser($userId: String!) {
            getUser(userId: $userId) {
              _id
              username
              firstName
              lastName
              email
              description
              phone
            }
          }`,
      variables: {
        userId: userId
      }
    };

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.0.13:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async res => {
        // if (res.status !== 200 && res.status !== 201) {
        //   throw new Error("Failed!");
        // }

        const responseJson = await res.json();
        console.log(responseJson);

        if (res.ok) {
          const id = responseJson.data.getUser._id;
          const username = responseJson.data.getUser.username;
          const firstName = responseJson.data.getUser.firstName;
          const lastName = responseJson.data.getUser.lastName;
          const email = responseJson.data.getUser.email;
          const description = responseJson.data.getUser.description;
          const phone = responseJson.data.getUser.phone;

          this.setState({
            id: id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            description: description,
            phone: phone
          });

          if (description == "") {
            this.setState({ description: "NONE" });
          }

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        {/* <KeyboardAvoidingView
          style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
          behavior="padding"
          enabled
        > */}
        <KeyboardAwareScrollView extraScrollHeight={50}>
          <ScrollView contentContainerStyle={formStyle.formContainer}>
            <View style={mainStyle.container}>
              <Avatar
                rounded
                icon={{ name: "user", type: "font-awesome" }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{ margin: 10, size: 60 }}
                size={150}
              />
            </View>
            <View style={formStyle.formContainer}>
              <Text style={formStyle.label}>Username: </Text>
              <Text style={mainStyle.smallText}>{this.state.username}</Text>
              {/* <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ name })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                editable={false}
              /> */}
              <Text style={formStyle.label}>User ID: </Text>
              <Text style={mainStyle.smallText}>{this.state.id}</Text>
              {/* <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ id })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                editable={false}
              /> */}
              <Text style={formStyle.label}>Name: </Text>
              <Text style={mainStyle.smallText}>
                {this.state.firstName}
                {this.state.lastName}
              </Text>
              {/* <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ id })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                editable={false}
              /> */}
              <Text style={formStyle.label}>Contact Number: </Text>
              <Text style={mainStyle.smallText}>{this.state.phone}</Text>
              {/* <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ cell })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                editable={false}
              /> */}
              <Text style={formStyle.label}>Email Address: </Text>
              <Text style={mainStyle.smallText}>{this.state.email}</Text>
              {/* <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ email })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                editable={false}
              /> */}
              <Text style={formStyle.label}>Profile Description</Text>
              <Text style={mainStyle.smallText}>{this.state.description}</Text>
              {/* <TextField
                //label="Subject Description"
                onChangeText={subjectDesc => this.setState({ description })}
                value={this.state.subjectDesc}
                autoCapitalize="none"
                scrollEnabled="true"
                multiline={true}
                style={formStyle.placeholderStyle}
                color="white"
                selectionColor="red"
                keyboardAppearance="dark"
                labelTextColor="white"
                maxLength={300}
                editable={false}
              /> */}
            </View>
          </ScrollView>
          {/* </KeyboardAvoidingView> */}
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default MemberProfile;
