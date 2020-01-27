import React from "react";
import { Text, View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import {mainStyle, headeRegStyle, headerDrawerStyle, headerDrawerPlusStyle, headerBackStyle, headerRegStyle} from '../styles/styles';
import Icon from "react-native-vector-icons/Ionicons";


export const HeaderReg = ({ label }) => (

    <View style={headerRegStyle.titleBar}>
        <StatusBar barStyle='light-content'/>
        <View style={headerRegStyle.centerContainer}>
        <Text style={headerRegStyle.centerText}>{label}</Text>
        </View>
  </View>

);

export const HeaderDrawer = ({ label }) => (

    <View style={headerDrawerStyle.titleBar}>
        <StatusBar barStyle='light-content'/>
    <TouchableOpacity>
        <Icon name='ios-menu' color={'white'} size={50} style={{ marginTop: 40, marginLeft: 30, marginRight: -50}}/>
    </TouchableOpacity>
    <View style={headerDrawerStyle.centerContainer}>
        <Text style={headerDrawerStyle.centerText}>{label}</Text>
    </View>
  </View>

);

export const HeaderDrawerPlus = ({ label }) => (

    <View style={headerDrawerPlusStyle.titleBar}>
        <StatusBar barStyle='light-content'/>
    <TouchableOpacity>
        <Icon name='ios-menu' color={'white'} size={50} style={{ marginTop: 40, marginLeft: 20}}/>
    </TouchableOpacity>
        <Text style={headerDrawerPlusStyle.centerText}>{label}</Text>
    <TouchableOpacity>
        <Icon name='ios-add' color={'white'} size={50} style={{ marginTop: 40, marginRight: 20}}/>
    </TouchableOpacity>
  </View>

);

export const HeaderBack = ({ label }) => (

    <View style={headerBackStyle.titleBar}>
        <StatusBar barStyle='light-content'/>
    <TouchableOpacity>
        <Icon name='ios-arrow-back' color={'white'} size={50} style={{ marginTop: 40, marginLeft: 30, marginRight: -40}}/>
    </TouchableOpacity>
    <View style={headerBackStyle.centerContainer}>
        <Text style={headerBackStyle.centerText}>{label}</Text>
     </View>

  </View>

);

