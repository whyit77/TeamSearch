import React from "react";
import { Text, View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import {mainStyle, teamListStyle} from '../styles/styles';
import Icon from "react-native-vector-icons/Ionicons";


export const Team = ({ name, status, admin, size, description }) => (

    <TouchableOpacity style={teamListStyle.teamContainer}>
        <View style={teamListStyle.centerContainer}>
        <View style={teamListStyle.container1}>
            <View style={teamListStyle.nameContainer}>
                <Text style={teamListStyle.teamLabelText}>Name: </Text>
                <Text style={teamListStyle.teamInputText}>{name}</Text>
            </View>
            <View style={teamListStyle.statusContainer}>
                <Text style={teamListStyle.teamLabelText}>Status: </Text>
                <Text style={teamListStyle.teamInputText}>{status}</Text>
            </View>
        </View>
        <View style={teamListStyle.container2}>
            <View style={teamListStyle.adminContainer}>
                <Text style={teamListStyle.teamLabelText}>Admin: </Text>
                <Text style={teamListStyle.teamInputText}>{admin}</Text>
            </View>
            <View style={teamListStyle.sizeContainer}>
                <Text style={teamListStyle.teamLabelText}>Size: </Text>
                <Text style={teamListStyle.teamInputText}>{size}</Text>

            </View>
        </View>
        
        <View style={teamListStyle.container3}>
            <View style={teamListStyle.descriptionContainer}>
                <Text style={teamListStyle.teamLabelText}>Description: </Text>
                <Text style={teamListStyle.teamInputText}>{description}</Text>

            </View>
        </View>
    </View>
  </TouchableOpacity>

);