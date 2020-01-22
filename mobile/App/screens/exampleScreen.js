import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


import { exampleButtons, exampleStyle, exampleText } from '../styles/exampleStyles'


class ExampleScreen extends React.Component{

    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <View style={exampleStyle.toplevel}>
                {/* ////////// START: Header Bar ///////////// */}

                <StatusBar barStyle='light-content'/>
                <View style={exampleStyle.titleBar}>
                    
                    <View style={exampleStyle.leftContainer}>
                        <TouchableOpacity style={exampleStyle.leftButton}>
                            <Text style={exampleStyle.leftButton}>///</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={exampleStyle.centerContainer}>
                        <Text style={exampleStyle.centerText}> Richie </Text>
                    </View>
                    <View style={exampleStyle.rightContainer}>
                        <TouchableOpacity style={exampleStyle.rightButton}>
                            <Text style={exampleStyle.rightButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{flex: 1}}/> */}
                </View>

                {/* ////////// END: Header Bar ///////////// */}


                {/* ////////// START: Main Content ///////////// */}
                <View style={exampleStyle.container}>
                    <Text style={exampleText.textStyle}>(^:</Text>
                    
                    <View style={exampleButtons.viewStyle}>
                        <TouchableOpacity style={exampleButtons.buttonContainer}><Text style={exampleButtons.buttonText}> potatos and yams</Text></TouchableOpacity>
                    </View>
                </View>
                

                {/* ////////// END: Main Content ///////////// */}


             </View>

        )
    }
}


export default ExampleScreen;