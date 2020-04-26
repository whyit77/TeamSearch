import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar,
  Clipboard,
  Alert,
  Linking,
  Platform,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
  B1,
  B2,
  B3,
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
    phone: "",
    clipboardContent: "",
  };

  componentDidMount() {
    const userId = this.props.navigation.getParam("memberId");

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
        userId: userId,
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
          const description =
            responseJson.data.getUser.description == ""
              ? "NONE"
              : responseJson.data.getUser.description;
          const phone = responseJson.data.getUser.phone;

          this.setState({
            id: id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            description: description,
            phone: phone,
          });

          if (description == "") {
            this.setState({ description: "NONE" });
          }

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  writeToClipboard = async () => {
    await Clipboard.setString(this.state.id);
    Alert.alert("Copied", "User ID Copied");
  };

  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      // phoneNumber = "tel:${1234567890}";
      phoneNumber = "sms:${" + this.state.phone + "}";
    } else {
      // phoneNumber = 'telprompt:${1234567890}';
      phoneNumber = "sms:${" + this.state.phone + "}";
    }

    Linking.openURL("sms:" + this.state.phone);
  };

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
                // icon={{ name: "user", type: "font-awesome" }}
                title={this.state.firstName[0] + this.state.lastName[0]}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                containerStyle={{ margin: 10, size: 60 }}
                size={150}
                overlayContainerStyle={{
                  backgroundColor: B2,
                }}
              />
            </View>

            <Text style={formStyle.label}>
              ID:{" "}
              <Text
                style={formStyle.placeholderStyle}
                onPress={this.writeToClipboard}
              >
                {this.state.id}
              </Text>
            </Text>

            {/* <TextField editable={false}>
                  <Text 
                    style={formStyle.placeholderStyle} 
                    onPress={console.log("yes")} 
                  >
                    {this.state.id}
                  </Text>
              </TextField> */}

            <Text style={formStyle.label}>Name: </Text>
            <TextField editable={false}>
              <Text style={formStyle.fillInText}>
                {this.state.firstName} {this.state.lastName}
              </Text>
            </TextField>

            <View style={formStyle.formContainer}>
              <Text style={formStyle.label}>Username: </Text>
              <TextField editable={false}>
                <Text style={formStyle.fillInText}>{this.state.username}</Text>
              </TextField>

              <Text style={formStyle.label}>
                Contact Number:
                <Text
                  onPress={this.dialCall}
                  activeOpacity={0.7}
                  style={formStyle.placeholderStyle}
                >
                  {" "}
                  {this.state.phone}
                </Text>
              </Text>

              <Text style={formStyle.label}>
                Email:
                <Text
                  onPress={() => Linking.openURL("mailto:" + this.state.email)}
                  title="support@example.com"
                  style={formStyle.placeholderStyle}
                >
                  {" "}
                  {this.state.email}
                </Text>
              </Text>

              <Text style={formStyle.label}>Profile Description</Text>
              {/* <Text style={mainStyle.smallText}>{this.state.description}</Text> */}
              <TextField editable={false} multiline={true}>
                <Text style={formStyle.placeholderStyle}>
                  {this.state.description}
                </Text>
              </TextField>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default MemberProfile;
