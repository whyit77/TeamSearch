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
  StatusBar,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
  B1,
  B2,
  B3
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";

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
    fetch("http://192.168.1.10:3000/graphql", {
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
    fetch("http://192.168.1.10:3000/graphql", {
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
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <ScrollView contentContainerStyle={mainStyle.toplevel}>
          {/* <View style={mainStyle.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
                }}
              />
          </View>
          <View style={mainStyle.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
                }}
              />
          </View> */}

          <View style={
          mainStyle.container,
          {backgroundColor:B2, 
          // borderBottomColor: B3,
          // borderColor: B3, 
          borderBottomWidth: 2, 
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100
          }}
          // onPress={}
          >
            <Text style={mainStyle.pinInfoTitle}>Pinned By: <Text style={mainStyle.pinInfoTitle, {fontWeight: 'bold'}}> {this.state.username}</Text></Text>
          
        </View>
          <Text style={formStyle.label}>Pin Title:</Text>
          <TextField
            value={this.state.pinName}
            onChangeText={(pinName) => this.setState({ pinName })}
            placeholder="Name of pin"
            maxLength={40}
            style={formStyle.placeholderStyle}
            color="white"
            selectionColor="red"
            keyboardAppearance="dark"
            labelTextColor="white"
          />
          <Text style={formStyle.label}>Pin Description:</Text>
          <TextField
            onChangeText={(description) => this.setState({ description })}
            placeholder="Description of pin"
            maxLength={250}
            style={formStyle.placeholderStyle}
            color="white"
            selectionColor="red"
            keyboardAppearance="dark"
            labelTextColor="white"
            multiline={true}
          />
          {/* <View style={mainStyle.container}>
            <TouchableOpacity
              style={buttonStyle.buttonContainer}
              onPress={() => this.handleSubmit()}
            >
              <Text style={buttonStyle.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View> */}
          <View style={formStyle.formButtonContainer}>
                <Button
                  style={formStyle.formButton}
                  text="Apply"
                  color="white"
                  onPress={() => this.handleSubmit()}
                  />
              </View>
        </ScrollView>
      </SafeAreaView>
    ) : (
      <SafeAreaView style={mainStyle.toplevel}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <ScrollView contentContainerStyle={formStyle.formContainer}>
          {/* <View style={mainStyle.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png"
                }}
              />
          </View> */}

<View style={
          mainStyle.container,
          {backgroundColor:B2, 
          // borderBottomColor: B3,
          // borderColor: B3, 
          borderBottomWidth: 2, 
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100
          }}
          // onPress={}
          >
            <Text style={mainStyle.pinInfoTitle}>Pinned By: <Text style={mainStyle.pinInfoTitle, {fontWeight: 'bold'}}> {this.state.username}</Text></Text>
          
        </View>

        <Text style={formStyle.label}>Title: 
          
          <Text style={formStyle.label,{color: 'white', fontWeight: 'bold', fontSize: 25}}> {this.state.pinName}</Text>
               
        </Text>
            {/* <TextField editable={false}> */}
              
            {/* </TextField> */}
          {/* <Text style={formStyle.label}>Title: {this.state.pinName}</Text> */}
          {/* <Text style={formStyle.label}>
            Pin Description: {this.state.description}
          </Text> */}

          <Text style={formStyle.label}>Description:</Text>
              {/* <Text style={mainStyle.smallText}>{this.state.description}</Text> */}
              <TextField editable={false} multiline={true}>
                <Text style={formStyle.placeholderStyle}>
                {this.state.description}
                </Text>
              </TextField>
          {/* <View style={mainStyle.container}>
              <TouchableOpacity
                style={buttonStyle.buttonContainer}
                onPress={() => this.handleSubmit()}
              >
                <Text style={buttonStyle.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View> */}
        </ScrollView>
    </SafeAreaView>
    );
  }
}

export default PinInformation;
