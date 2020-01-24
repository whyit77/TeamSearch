import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Keyboard, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";

import { exampleButtons, exampleStyle, exampleText } from '../styles/exampleStyles'

import t from 'tcomb-form-native';

const Form = t.form.Form;
const fromStyles = {
    ...Form.stylesheet,
    controlLabel: {
        normal: {
            color: 'white',
            
        }
    }
}

var Gender = t.enums ({
    M: 'Male',
    F: 'Female'
})

const ExampleForm = t.struct({
    email: t.String,
    username: t.String,
    password: t.String,
    terms: t.Boolean,
    birthday: t.Date,
    gender: Gender
  });

class ExampleScreen extends React.Component{

    // static navigationOptions = {
    //     title: 'example',
    // };

    handleSubmit = () => {
        // Button submit handle
      }

    static navigationOptions = {
        header: ( /* custom header */
          <View style={exampleStyle.titleBar}>
            <TouchableOpacity>
                <Icon name='ios-menu' color={'white'} size={50} style={{ marginTop: 50, marginLeft: 20}}/>
            </TouchableOpacity>
            <Text style={exampleStyle.centerText}>Header</Text>
            <TouchableOpacity>
                <Icon name='ios-add' color={'white'} size={50} style={{ marginTop: 50, marginRight: 20}}/>
            </TouchableOpacity>
          </View>
        )
      };


    render() {
        return (
            <View style={exampleStyle.toplevel}>
                {/* ////////// START: Header Bar ///////////// */}

                <StatusBar barStyle='light-content'/>


                {/* ////////// START: Main Content ///////////// */}
                <ScrollView>
                    <View style={exampleStyle.container}>
                        <Text style={exampleText.textStyle}>Here's the style y'all</Text>
                        
                        <View style={exampleButtons.viewStyle}>
                            <TouchableOpacity style={exampleStyle.buttonContainer}>
                                <Text style={exampleButtons.buttonContainer}>Example</Text>
                            </TouchableOpacity>
                        </View>

                        
                    </View>
                    <View style={exampleStyle.formContainer}>
                        <Form type={ExampleForm} style={exampleStyle.textStyle} />
                        <TouchableOpacity style={exampleStyle.buttonContainer}>
                            <Text style={exampleStyle.formButtonText}>Submit</Text>
                        </TouchableOpacity>
                     </View>
                </ScrollView>
                
                

                {/* ////////// END: Main Content ///////////// */}


             </View>

        )
    }
}


export default ExampleScreen;