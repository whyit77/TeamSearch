import React from "react";
import { Text, View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import {mainStyle, teamMemberStyle, teamListStyle, headerRegStyle} from '../styles/styles';
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from 'react-native-elements';


export const TeamMember = ({ avatar, fname, lname, role , nav}) => (

    <TouchableOpacity onPress={nav} style={teamMemberStyle.mainContainer}>
        <View style={teamMemberStyle.contentContainer}>
        <Avatar
                size="medium"
                title='JD'
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                />
            <View style={teamMemberStyle.nameContainer}>
                
                <Text style={teamMemberStyle.bigText}>{fname} {lname} </Text>

            </View>
            <Icon name='ios-arrow-forward' color={'white'} size={50} style={{  marginLeft: 30, marginRight: 35}}/>
            
    </View>
  </TouchableOpacity>

);