import React from "react";
import { Text, View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import {mainStyle, teamListStyle} from '../styles/styles';
import Icon from "react-native-vector-icons/Ionicons";


export const TeamAlert = ({ title, message, sender, time, urgency }) => (

    <TouchableOpacity style={teamListStyle.teamContainer}>
        <View style={teamListStyle.centerContainer}>
        <View style={teamListStyle.container1}>
            <View style={teamListStyle.nameContainer}>
                <Text style={teamListStyle.teamLabelText}>Title: </Text>
                <Text style={teamListStyle.teamInputText}>{title}</Text>
            </View>
            <View style={teamListStyle.statusContainer}>
                <Text style={teamListStyle.teamLabelText}>Urgency: </Text>
                <Text style={teamListStyle.teamInputText}>{urgency}</Text>
            </View>
        </View>
        <View style={teamListStyle.container2}>
            <View style={teamListStyle.adminContainer}>
                <Text style={teamListStyle.teamLabelText}>From: </Text>
                <Text style={teamListStyle.teamInputText}>{sender}</Text>
            </View>
            <View style={teamListStyle.sizeContainer}>
                <Text style={teamListStyle.teamLabelText}>Time: </Text>
                <Text style={teamListStyle.teamInputText}>{time}</Text>

            </View>
        </View>
        
        <View style={teamListStyle.container3}>
            <View style={teamListStyle.descriptionContainer}>
                <Text style={teamListStyle.teamLabelText}>Message: </Text>
                <Text style={teamListStyle.teamInputText}>{message}</Text>

            </View>
        </View>
    </View>
  </TouchableOpacity>

);