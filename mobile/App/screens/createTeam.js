import React from 'react';
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

} from 'react-native';
import { mainStyle, formStyle } from '../styles/styles';
import { TextField, ErrorText } from '../components/Form';
import { Button } from '../components/Button';
import { ImageField } from '../components/Image';
//import { reviewApi } from "../util/api";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class CreateTeam extends React.Component {
  state = {
    teamName: "",
    teamCode: "",
    searchDesc: "",
    subjectDesc: "",
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
                    'https://i.ya-webdesign.com/images/white-camera-png-7.png',
                }}
                bottomLabel="Add/Change Photo"
                onBottomPress={() => Alert.alert('Navigate to Change Photo Page')}
                bottomLabelStyles={mainStyle.link}
              />
              <Text style={formStyle.label} >Team Name</Text>
              <TextField
                //label="Team Name"
                onChangeText={teamName => this.setState({ teamName })}
                value={this.state.teamName}
                autoCapitalize="none"
                style={formStyle.placeholderStyle}
                color='white'
                selectionColor='red'
                keyboardAppearance='dark'
                labelTextColor='white'
              />
              <Text style={formStyle.label} >Team Code</Text>
              <TextField
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
              />
              <Text style={formStyle.label} >Search Description</Text>
              <TextField
                //label="Search Description"
                placeholder="What is the situation?"
                onChangeText={searchDesc => this.setState({ searchDesc })}
                value={this.state.searchDesc}
                autoCapitalize="none"
                scrollEnabled='true'
                multiline={true}
                style={formStyle.placeholderStyle}
                color='white'
                selectionColor='red'
                keyboardAppearance='dark'
                labelTextColor='white'
                maxLength={300}

              />
              <Text style={formStyle.label} >Subject Description</Text>
              <TextField
                //label="Subject Description"
                placeholder="What are you looking for?"
                onChangeText={subjectDesc => this.setState({ subjectDesc })}
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
              />
              <View style={mainStyle.container}>
                <Button
                  style={formStyle.formButton}
                  text="Define Search Area"
                  onPress={() => this.props.navigation.navigate("DefineSearchArea")}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
