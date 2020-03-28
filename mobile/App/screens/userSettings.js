// App/screens/userSettings.js

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
  TouchableOpacity
} from "react-native";
import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import { AuthContext } from "../context/auth-context";

export default class App extends React.Component {
  // static contextType = AuthContext;

  state = {
    // switchITValue: false,
    // switchLTValue: false,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    desc: "",
    phone: ""
    // changePass: "",
    // confirmPass: ""
  };

  // toggleITSwitch = value => {
  //   this.setState({ switchITValue: value });
  // };

  // toggleLTSwitch = value => {
  //   this.setState({ switchLTValue: value });
  // };

  componentDidMount() {
    // TODO: GET CURRENT LOGGED IN USER //
    const userId = "5e7b1daaa2b8f6182851c49e";

    let requestBody = {
      query: `
          query getUser($userId: String!) {
            getUser(userId: $userId) {
              _id
              username
              firstName
              lastName
              email
              desc
              phone
            }
          }`,
      variables: {
        userId: userId
      }
      // query: `
      //   query {
      //     me {
      //       _id
      //       username
      //       firstName
      //       lastName
      //       email
      //       desc
      //       phone
      //     }
      //   }
      // `
    }; // TODO: FIX currently pulls first person in database

    // CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
    fetch("http://192.168.1.12:3000/graphql", {
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
          const username = responseJson.data.getUser.username;
          const firstName = responseJson.data.getUser.firstName;
          const lastName = responseJson.data.getUser.lastName;
          const email = responseJson.data.getUser.email;
          const desc = responseJson.data.getUser.desc;
          const phone = responseJson.data.getUser.phone;

          this.setState({
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            desc: desc,
            phone: phone
          });

          if (desc == "") {
            this.setState({ desc: "NONE" });
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
      <View style={formStyle.formContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <KeyboardAwareScrollView extraScrollHeight={50}>
          <ScrollView contentContainerStyle={formStyle.formContainer}>
            <View style={mainStyle.container}>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
                }}
              />
              <Text
                style={formStyle.link}
                onPress={() => Alert.alert("Navigate to Change Photo Page")}
              >
                Change Photo
              </Text>
            </View>
            <View>
              {/* <TextField
              // onChangeText={username => this.setState({ username })}
              // placeholder="Username"
              value={this.state.username}
              maxLength={40}
            /> */}
              <Text style={mainStyle.smallText}>{this.state.username}</Text>
              {/* <TextField
              onChangeText={name => this.setState({ name })}
              placeholder="Name"
              maxLength={40}
            /> */}
              <Text style={mainStyle.smallText}>
                {this.state.firstName} {this.state.lastName}
              </Text>
              {/* <TextField
              onChangeText={email => this.setState({ email })}
              placeholder="Email"
              maxLength={40}
            /> */}
              <Text style={mainStyle.smallText}>{this.state.email}</Text>
              {/* <TextField
              onChangeText={cert => this.setState({ cert })}
              placeholder="Certifications/Descriptions"
              maxLength={250}
            /> */}
              <Text style={mainStyle.smallText}>{this.state.desc}</Text>
              {/* <TextField
              onChangeText={cell => this.setState({ cell })}
              placeholder="Cell #"
              maxLength={40}
            /> */}
              <Text style={mainStyle.smallText}>{this.state.phone}</Text>
              {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch
                  style={formStyle.toggle}
                  onValueChange={this.toggleITSwitch}
                  value={this.state.switchITValue}
                  trackColor={{ true: "red", false: "grey" }}
                />
                <Text style={formStyle.toggleLabel}> View Inactive Teams </Text>
                {/* <Text>{this.state.switchITValue ? "ON" : "OFF"}</Text> */}
              {/* </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch
                  style={formStyle.toggle}
                  onValueChange={this.toggleLTSwitch}
                  value={this.state.switchLTValue}
                  trackColor={{ true: "red", false: "grey" }}
                />
                <Text style={formStyle.toggleLabel}> Location Tracking </Text>
                {/* <Text>{this.state.switchLTValue ? 'ON' : 'OFF'}</Text> */}
              {/* </View>

              <TextField
                onChangeText={changePass => this.setState({ changePass })}
                placeholder="Change Password"
                maxLength={40}
                selectionColor="red"
                keyboardAppearance="dark"
                color="white"
              />

              <TextField
                onChangeText={confirmPass => this.setState({ confirmPass })}
                placeholder="Confirm Password"
                maxLength={40}
                selectionColor="red"
                keyboardAppearance="dark"
                color="white"
              /> */}
              {/* <View style={mainStyle.container}>
                <TouchableOpacity style={buttonStyle.buttonContainer}>
                  <Text style={buttonStyle.buttonText}>Save</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
