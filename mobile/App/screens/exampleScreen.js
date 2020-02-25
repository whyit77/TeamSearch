import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Keyboard, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";

import {TextField, RadioButton} from '../components/Form';
import { TeamList } from '../components/TeamList';

import {HeaderReg, HeaderDrawer, HeaderDrawerPlus, HeaderBack} from '../Components/Header'

import { buttonStyle, mainStyle, exampleText, formStyle, teamListStyle } from '../styles/styles'

import t from 'tcomb-form-native';

// import { Drawer, createDrawerNavigator } from 'react-navigation-drawer';





class ExampleScreen extends React.Component{

    // static navigationOptions = {
    //     title: 'example',
    // };

    navigateToLogIn = () => {
      this.props.navigation.navigate('loginEx');
    }

    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };

    handleSubmit = () => {
        // Button submit handle
      }

    static navigationOptions = {
        header: ( /* custom header */
          <HeaderReg label={'Home'}></HeaderReg>
        )
      };


    render() {
        return (
            <View style={mainStyle.toplevel}>

                <ScrollView>
                    <View style={mainStyle.container}>
                        <Text style={mainStyle.bigText}>Team Search Rules</Text>
                        
                        <TouchableOpacity style={mainStyle.primary} >
                            <View style={buttonStyle.buttonContainer} onPress={this.navigateToLogIn}>
                                <Text style={buttonStyle.buttonText}>Example</Text>
                            </View>
                        </TouchableOpacity>
                       

                        
                    </View>
                    <View style={formStyle.formContainer}>
                        <TextField label={'Name'} placeholder={'Johnny'}></TextField>
                        <TextField label={'Email'} placeholder={'JohnnyS@example.com'}></TextField>
                        {/* <RadioButton label={'Gender'}></RadioButton> */}
                        <TouchableOpacity style={formStyle.formButton}>
                            <Text style={formStyle.formButtonText}>Submit</Text>
                        </TouchableOpacity>

                     </View>
                     <View style={teamListStyle.teamContainer}>
                        <TeamList name={'TeamSearch'} status={'Active'} admin={'Dr. Dan'} size={20} description={'Small boi'}></TeamList>

                     </View>
                </ScrollView>
                
                

                {/* ////////// END: Main Content ///////////// */}


             </View>

        )
    }
}


export default ExampleScreen;