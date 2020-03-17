import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Picker,
  StatusBar
} from "react-native";

import { mainStyle, formStyle } from "../styles/styles";

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";
//import { reviewApi } from "../util/api";

const styles = StyleSheet.create({
  textBlock: {
    marginTop: 20
  },
  text: {
    fontSize: 18,
    color: "#969696",
    textAlign: "center",
    marginBottom: 2
  },
  link: {
    textDecorationLine: "underline"
  }
});

export default class DefineSearchArea extends React.Component {
  state = {
    area: "",
    units: "",
    error: ""
  };

  // handleSubmit = () => {
  //   this.setState({ error: "" });

  //   ////////// CHECK PASSWORDS ////////////
  //   if (this.state.password != this.state.repassword) {
  //     this.setState({
  //       error: "Passwords do not match!",
  //       password: "",
  //       repassword: ""
  //     });
  //   }
  //   //////////////////////////////////////

  //   ////////// CREATE NEW ACCOUNT ////////////
  //   reviewApi("/create-account", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       firstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       password: this.state.password
  //     })
  //   })
  //     .then(() => {
  //       // go to login screen
  //       this.props.navigation.navigate("SignIn");
  //     })
  //     .catch(error => {
  //       this.setState({ error: error.message });
  //     });
  //   ///////////////////////////////////////////
  // };

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        behavior="padding"
        enabled
      >
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

        <ScrollView contentContainerStyle={mainStyle.toplevel}>
          <Text style={mainStyle.text}>MAP</Text>
          {/* <Text style={mainStyle.text}>UNITS</Text> */}
          <Picker
            prompt="Select your map's units:"
            label='Units Selection'
            mode='dropdown'
             placeholderStyle='white'
             style={formStyle.picker}
             //selectedValue={this.state.area}
             onValueChange={(itemValue, itemIndex) =>
              this.setState({units: itemValue})
            }
              itemStyle={{color: 'white'}}
            >
            {/* <Picker.Item label="SELECT" value='null' /> */}
            <Picker.Item label="Imperial" value="imperial" />
            <Picker.Item label="Metric" value="metric" />
          </Picker>
          <Text style={formStyle.label}>Search Radius</Text>
          <TextField
            //label="Search Radius"
            onChangeText={radius => this.setState({ radius })}
            value={this.state.radius}
            autoCapitalize="none"
            style={formStyle.placeholderStyle}
            color='white'
            selectionColor='red'
            keyboardAppearance='dark'
            
          >{this.state.units}</TextField>
          <Text>{this.state.units}</Text>
          <ErrorText text={this.state.error} />
          <View style={mainStyle.container}>
            <Button
              style={formStyle.formButton}
              text="Finish"
              onPress={() => this.props.navigation.navigate("TeamInfo")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
