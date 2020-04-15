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
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle,
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import Button from "../components/Button";

// import { AuthContext } from "../context/auth-context";

export default class App extends React.Component {
  // static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      // switchITValue: false,
      // switchLTValue: false,
      userId: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      phone: "",
      // changePass: "",
      // confirmPass: ""
    };
  }

  // toggleITSwitch = value => {
  //   this.setState({ switchITValue: value });
  // };

  // toggleLTSwitch = value => {
  //   this.setState({ switchLTValue: value });
  // };

  logout = () => {
    const username = this.state.username;
    console.log(username);

    let requestBody = {
      query: `
        mutation logout($username: String!) {
          logout(username: $username) {
            username
          }
        }
      `,
      variables: {
        username: username,
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
        console.log("logging out");
        console.log(responseJson);

        if (res.ok) {
          console.log("Okay LOGOUT");
          this.props.navigation.navigate("Login");
          return responseJson;
        }

        // this.setState({ error: responseJson.errors[0].message });
        throw new Error(responseJson.error);
      })
      // .then(resData => {
      //   if (resData.data.login.token) {
      //     //////////////
      //     this.context.Login(
      //       resData.data.login.token,
      //       resData.data.login.userId,
      //       resData.data.login.tokenExpiration
      //     );
      //   }
      // })
      .catch((err) => {
        console.log(err);
      });
  };

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

  fetchUser() {
    // const userId = "5e914c8d4d7ca83308289294";
    const userId = this.state.userId;

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
    fetch("http://192.168.1.9:3000/graphql", {
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
          // const userId = responseJson.data.getUser._id;
          const username = responseJson.data.getUser.username;
          const firstName = responseJson.data.getUser.firstName;
          const lastName = responseJson.data.getUser.lastName;
          const email = responseJson.data.getUser.email;
          const description = responseJson.data.getUser.description;
          const phone = responseJson.data.getUser.phone;

          this.setState({
            // userId: userId,
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

  componentDidMount() {
    this.fetchCurrentUser();
    console.log("mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userId !== this.state.userId) {
      console.log("UPDATING...");
      this.fetchUser(); // populate logged in user info
    }
  }

  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${1234567890}";
      phoneNumber = "sms:${1234567890}";
    } else {
      // phoneNumber = 'telprompt:${1234567890}';
      phoneNumber = "sms:${1234567890}";
    }

    Linking.openURL("sms:" + this.state.phone);
  };

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
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg==",
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
              <Text style={formStyle.label}>User Name: </Text>
              <TextField editable={false}>
                <Text style={formStyle.fillInText}>{this.state.username}</Text>
              </TextField>

              <Text style={formStyle.label}>First and Last Names: </Text>
              <TextField editable={false}>
                <Text style={formStyle.fillInText}>
                  <Text style={formStyle.fillInText}>
                    {this.state.firstName} {this.state.lastName}
                  </Text>
                </Text>
              </TextField>

              <Text style={formStyle.label}>Description: </Text>
              <TextField editable={false}>
                <Text style={formStyle.placeholderStyle}>
                  {this.state.description}
                </Text>
              </TextField>

              <Text style={formStyle.label}>
                Email:
                <Text
                  onPress={() => Linking.openURL("mailto:support@example.com")}
                  title="support@example.com"
                  style={formStyle.placeholderStyle}
                >
                  {" "}
                  {this.state.email}
                </Text>
              </Text>

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
              <Button
                style={formStyle.formButton}
                title="LOGOUT (temp)"
                onPress={() => this.logout()}
              />
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
