import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";

const hamburgerIcon = <Icon name='Menu' size={20} color='black'/>
import { exampleButtons, exampleStyle, exampleText } from '../styles/exampleStyles'


class ExampleScreen extends React.Component{

    // static navigationOptions = {
    //     title: 'example',
    // };

    static navigationOptions = {
        header: ( /* Your custom header */
          <View style={exampleStyle.titleBar}>
            <TouchableOpacity>
                <Icon name='ios-menu' color={'white'} size={50} style={{ marginTop: 50, marginLeft: 10}}/>
            </TouchableOpacity>
            <Text style={exampleStyle.centerText}>Header</Text>
            <TouchableOpacity>
                <Icon name='ios-add' color={'white'} size={50} style={{ marginTop: 50, marginRight: 10}}/>
            </TouchableOpacity>
          </View>
        )
      };


    render() {
        return (
            <View style={exampleStyle.toplevel}>
                {/* ////////// START: Header Bar ///////////// */}

                <StatusBar barStyle='light-content'/>
                {/* <View style={exampleStyle.titleBar}>
                    
                    <View style={exampleStyle.leftContainer}>
                        <TouchableOpacity style={exampleStyle.leftButton}>
                            <Text style={exampleStyle.leftButton}>///</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={exampleStyle.centerContainer}>
                        <Text style={exampleStyle.centerText}> Example </Text>
                    </View>
                    <View style={exampleStyle.rightContainer}>
                        <TouchableOpacity style={exampleStyle.rightButton}>
                            <Text style={exampleStyle.rightButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{flex: 1}}/> */}
                {/* </View> */}

                {/* ////////// END: Header Bar ///////////// */}


                {/* ////////// START: Main Content ///////////// */}
                <ScrollView>
                    <View style={exampleStyle.container}>
                        <Text style={exampleText.textStyle}>Here's the style y'all</Text>
                        
                        <View style={exampleButtons.viewStyle}>
                            <TouchableOpacity style={exampleButtons.buttonContainer}><Text style={exampleButtons.buttonText}> potatos </Text></TouchableOpacity>
                        </View>

                        
                    </View>
                </ScrollView>
                

                {/* ////////// END: Main Content ///////////// */}


             </View>

        )
    }
}


export default ExampleScreen;