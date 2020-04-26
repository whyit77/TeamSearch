// App/screens/pinInfo.js

import React from "react";
import {
  TextInput,
  Switch,
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  Button,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  underline: { textDecorationLine: "underline" },
});

const initialState = {
  userId: "",
  username: "",
  teamId: "",
  pinName: "",
  pinLat: "",
  pinLong: "",
  description: "",
  creator: "",
  error: "",
  flag: "",
};

class PinInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  async fetchCurrent() {
    console.log("fetchCurrent");

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
          // set current logged in user and selected team in state
          const userId = responseJson.data.me.userId;
          const username = responseJson.data.me.username;
          const teamId = responseJson.data.me.teamId;

          this.setState({
            userId: userId,
            username: username,
            teamId: teamId,
          });

          // this.setParams();

          return responseJson;
        }

        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // setParams() {
  //   console.log("params");
  //   const lat = this.props.navigation.getParam("lat");
  //   const lon = this.props.navigation.getParam("long");
  //   const name = this.props.navigation.getParam("name");
  //   const desc = this.props.navigation.getParam("desc");
  //   const cre = this.props.navigation.getParam("creator");
  //   const fl = this.props.navigation.getParam("flag");
  //   this.setState({
  //     pinLat: lat,
  //     pinLong: lon,
  //     pinName: name,
  //     description: desc,
  //     creator: cre,
  //     flag: fl,
  //   });
  // }

  handleSubmit = () => {
    const userId = this.state.userId;
    const teamId = this.state.teamId;
    const pinName = this.state.pinName;
    const description = this.state.description;
    const pinLat = this.state.pinLat;
    const pinLong = this.state.pinLong;

    // const userId = "5e914c8d4d7ca83308289294";

    let requestBody = {
      query: `
          mutation createPin($userId: String!, $teamId: String!, $title: String!, $description: String!, $latitude: Float!, $longitude: Float!) {
            createPin(userId: $userId, teamId: $teamId, pinInput: { title: $title, description: $description, latitude: $latitude, longitude: $longitude}) {
              _id
              title
              description
              latitude
              longitude
              creator {
                username
              }
            }
          }
        `,
      variables: {
        userId: userId,
        teamId: teamId,
        title: pinName,
        description: description,
        latitude: pinLat,
        longitude: pinLong,
      },
    };

    // CHECK IP ADDRESS ///////////////////////////////////////////////////////////////////////////
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
          console.log("Okay PIN");
          const creator = responseJson.data.createPin.creator.username;

          this.setState({ creator: creator });

          this.props.navigation.navigate("MapView");
          this.setState(initialState);
          return responseJson;
        }

        this.setState(initialState);
        throw new Error(responseJson.error);
      })
      .catch((err) => {
        console.log(err);
      });

    this.forceUpdate(); // update components
  };

  async componentDidMount() {
    this.fetchCurrent(); // fetch current user and team
    console.log("mount");
    this.setState({
      pinLat: this.props.navigation.getParam("lat"),
      pinLong: this.props.navigation.getParam("long"),
      pinName: this.props.navigation.getParam("name"),
      description: this.props.navigation.getParam("desc"),
      creator: this.props.navigation.getParam("creator"),
      flag: this.props.navigation.getParam("flag"),
    });
  }

  render() {
    return this.state.flag ? ( // if it is a new pin, editable
      <View style={formStyle.formContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <ScrollView contentContainerStyle={formStyle.formContainer}>
          <View style={mainStyle.container}>
            {/* <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
                }}
              /> */}
          </View>
          <Text style={formStyle.label}>Pinned By: {this.state.username}</Text>
          <Text style={formStyle.label}>Pin Title:</Text>
          <TextField
            value={this.state.pinName}
            onChangeText={(pinName) => this.setState({ pinName })}
            placeholder="Name of pin"
            maxLength={40}
          />
          <Text style={formStyle.label}>Pin Description:</Text>
          <TextField
            onChangeText={(description) => this.setState({ description })}
            placeholder="Description of pin"
            maxLength={250}
          />
          <View style={mainStyle.container}>
            <TouchableOpacity
              style={buttonStyle.buttonContainer}
              onPress={() => this.handleSubmit()}
            >
              <Text style={buttonStyle.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    ) : (
      <View style={formStyle.formContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <ScrollView contentContainerStyle={formStyle.formContainer}>
          <View style={mainStyle.container}>
            {/* <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
                }}
              /> */}
          </View>
          <Text style={formStyle.label}>Pinned By: {this.state.creator}</Text>
          <Text style={formStyle.label}>Pin Title: {this.state.pinName}</Text>
          <Text style={formStyle.label}>
            Pin Description: {this.state.description}
          </Text>
          {/* <View style={mainStyle.container}>
              <TouchableOpacity
                style={buttonStyle.buttonContainer}
                onPress={() => this.handleSubmit()}
              >
                <Text style={buttonStyle.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View> */}
        </ScrollView>
      </View>
    );
  }
}

export default PinInformation;
