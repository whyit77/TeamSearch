import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import ValidationComponent from "react-native-form-validator";

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    marginBottom: 11
    // marginTop: 10
  },
  label: {
    color: "#4A4A4A",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 7
  },
  textfield: {
    fontSize: 18,
    fontWeight: "400",
    color: "#828282",
    marginBottom: 4
  }
});

export class TextFieldEmail extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = { email: "tibtib@gmail.com" };
  }

  // VALIDATE EMAIL /////////////////////////////////////////////////////////
  _onPressButton() {
    this.validate({
      emailAddress: { email: true }
    });

    // if (isValid == false) {
    //   this.setState({ initialState });
    //   this.setState({ error: "Email address is invalid." });
    //   return responseJson;
    // }
  }
  // this.validate({
  //   name: {minlength:3, maxlength:7, required: true},
  //   email: {email: true},
  //   number: {numbers: true},
  //   date: {date: 'YYYY-MM-DD'}
  // });

  render() {
    return (
      //   <View style={styles.row}>
      //     <Text style={styles.label}>{label}</Text>
      //     <TextInput
      //       style={styles.textfield}
      //       placeholderTextColor="#828282"
      //       {...props}
      //     />
      //   </View>

      <View style={styles.row}>
        <TextInput
          ref="email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />

        <TouchableHighlight onPress={this._onPressButton}>
          <Text style={styles.label}>Submit</Text>
        </TouchableHighlight>

        <Text style={styles.label}>{this.getErrorMessages()}</Text>
      </View>
    );
  }
}
