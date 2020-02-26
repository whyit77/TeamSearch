import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";import SafeAreaView from "react-native-safe-area-view";

import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'
import { TextField, ErrorText } from "../components/Form";

import { Avatar } from "react-native-elements";





class MemberProfile extends React.Component {
  state = {
    name: "",
    id: "",
    cell: "",
    email: "",
    description: "",
    error: ""
  };
  render() {
    return (
      <View style={mainStyle.toplevel}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',}} behavior="padding" enabled>
      <ScrollView contentContainerStyle={mainStyle.toplevel}>
        <View style={mainStyle.container}>
        <Avatar
          rounded
          icon={{name: 'user', type: 'font-awesome',}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{margin: 10, size: 60}}
          size={150}
          />
        </View>
        <View style={formStyle.formContainer}>
          <Text style={formStyle.label} >Diplay Name: </Text>
            <TextField
              //label="Team Name"
              onChangeText={teamName => this.setState({ name })}
              value={this.state.teamName}
              autoCapitalize="none"
              style={formStyle.placeholderStyle}
              color='white'
              selectionColor='red'
              keyboardAppearance='dark'
              labelTextColor='white'
              editable={false}
              />
            <Text style={formStyle.label} >User ID: </Text>
              <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ id })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color='white'
                selectionColor='red'
                keyboardAppearance='dark'
                labelTextColor='white'
                editable={false}
                />
              <Text style={formStyle.label} >User ID: </Text>
                <TextField
                  //label="Team Name"
                  onChangeText={teamName => this.setState({ id })}
                  value={this.state.teamName}
                  autoCapitalize="none"
                  style={formStyle.placeholderStyle}
                  color='white'
                  selectionColor='red'
                  keyboardAppearance='dark'
                  labelTextColor='white'
                  editable={false}
                  />
              <Text style={formStyle.label} >Contact Number: </Text>
                <TextField
                  //label="Team Name"
                  onChangeText={teamName => this.setState({ cell })}
                  value={this.state.teamName}
                  autoCapitalize="none"
                  style={formStyle.placeholderStyle}
                  color='white'
                  selectionColor='red'
                  keyboardAppearance='dark'
                  labelTextColor='white'
                  editable={false}
                  />
                <Text style={formStyle.label} >Email Address: </Text>
                  <TextField
                    //label="Team Name"
                    onChangeText={teamName => this.setState({ email })}
                    value={this.state.teamName}
                    autoCapitalize="none"
                    style={formStyle.placeholderStyle}
                    color='white'
                    selectionColor='red'
                    keyboardAppearance='dark'
                    labelTextColor='white'
                    editable={false}
                  />
                <Text style={formStyle.label} >Profile Description</Text>
                  <TextField
                    //label="Subject Description"
                    onChangeText={subjectDesc => this.setState({ description })}
                    value={this.state.subjectDesc}
                    autoCapitalize="none"
                    scrollEnabled='true'
                    multiline={true}
                    style={formStyle.placeholderStyle}
                    color='white'
                    selectionColor='red'
                    keyboardAppearance='dark'
                    labelTextColor='white'
                    maxLength={300}
                    editable={false}

                  />
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

export default MemberProfile;
