import React from "react";
import { Text, View, TextInput, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import {mainStyle, teamListStyle} from '../styles/styles';
import Icon from "react-native-vector-icons/Ionicons";


export const Team = ({ name, status, admin, size, description , nav}) => (

    <TouchableOpacity onPress={nav} style={teamListStyle.teamContainer}>
        <View style={teamListStyle.centerContainer}>
        <View style={teamListStyle.container1}>
            <View overflow={'hidden'} AccessibilityRole={'summary'} style={teamListStyle.nameContainer}>
                <Text style={teamListStyle.teamLabelText}>Name: 
                    <Text style={teamListStyle.teamInputText}> {name}</Text>
                </Text>
                
            </View>
            <View overflow={'hidden'} AccessibilityRole={'summary'} style={teamListStyle.statusContainer}>
                <Text style={teamListStyle.teamLabelText}>Status: 
                    <Text style={teamListStyle.activeText}> {status}</Text>
                </Text>
                
            </View>
        </View>
        <View overflow={'hidden'} AccessibilityRole={'summary'} style={teamListStyle.container2}>
            <View style={teamListStyle.adminContainer}>
                <Text style={teamListStyle.teamLabelText}>Admin: 
                    <Text style={teamListStyle.teamInputText}> {admin}</Text>
                </Text>
                
            </View>
            <View overflow={'hidden'} AccessibilityRole={'summary'} style={teamListStyle.sizeContainer}>
                <Text style={teamListStyle.teamLabelText}>Size: 
                    <Text style={teamListStyle.teamInputText}> {size}</Text>
                </Text>
                

            </View>
        </View>
        
        <View style={teamListStyle.container3}>
            <View overflow={'hidden'} AccessibilityRole={'summary'} style={teamListStyle.descriptionContainer}>
                <Text style={teamListStyle.teamLabelText} numberOfLines={1} >Description: 
                    <Text style={teamListStyle.teamInputText} adjustsFontSizeToFit={true}> {description}</Text>
                    {/* <Text style={teamListStyle.teamLabelText}>...</Text> */}
                ... </Text>
                

            </View>
        </View>
    </View>
  </TouchableOpacity>

);