import React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { mainStyle, teamListStyle } from "../styles/styles";
import Icon from "react-native-vector-icons/Ionicons";

export const TeamAlert = ({ title, message, sender, time, urgency }) => (

    <TouchableOpacity style={teamListStyle.teamContainer}>
        <View style={teamListStyle.centerContainer}>
        <View style={teamListStyle.container1}>
            <View 
            overflow={"hidden"}
            AccessibilityRole={"summary"}
            style={teamListStyle.nameContainer}
            style={teamListStyle.nameContainer}
            >
                <Text adjustsFontSizeToFit={true} style={teamListStyle.teamLabelText}>
                Title:
                <Text style={teamListStyle.teamInputText}> {title}</Text>
                </Text>
            </View>
            <View 
                overflow={"hidden"}
                AccessibilityRole={"summary"}
                style={teamListStyle.nameContainer}
                style={teamListStyle.statusContainer}
            >
                <Text adjustsFontSizeToFit={true} style={teamListStyle.teamLabelText}>
                Urgency:
                <Text style={teamListStyle.teamInputText}> {urgency}</Text>
                </Text>
            </View>
        </View>
        <View 
            overflow={"hidden"}
            AccessibilityRole={"summary"}
            style={teamListStyle.container2}
        >
            <View style={teamListStyle.adminContainer}>
                <Text numberOfLines={1} adjustsFontSizeToFit={true} style={teamListStyle.teamLabelText}>
                From:
                <Text style={teamListStyle.teamInputText}> {sender}</Text>
                </Text>
            </View>
            <View 
            overflow={"hidden"}
            AccessibilityRole={"summary"}
            style={teamListStyle.sizeContainer}
            >
                <Text numberOfLines={1} adjustsFontSizeToFit={true} style={teamListStyle.teamLabelText}>Time:
                <Text style={teamListStyle.teamInputText}> {time}</Text>
                </Text>
            </View>
        </View>
        
        <View style={teamListStyle.container3}>
        <View
          overflow={"hidden"}
          AccessibilityRole={"summary"}
          style={teamListStyle.descriptionContainer}
        >
          <Text style={teamListStyle.teamLabelText}>
            Description:
            <Text
              style={teamListStyle.teamInputText}
              adjustsFontSizeToFit={true}
            >
              {" "}
              {message}
            </Text>
            {/* ...{" "} */}
          </Text>
        </View>
        </View>
      {/* </View> */}
    </View>
  </TouchableOpacity>
);
