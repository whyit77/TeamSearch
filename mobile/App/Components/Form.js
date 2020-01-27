import React from "react";
import { Text, View, TextInput, StyleSheet, Dimensions } from "react-native";
import {mainStyle, formStyle} from '../styles/styles';
import { form } from "tcomb-form-native/lib";


export const TextField = ({ label, ...props }) => (
  <View style={formStyle.row}>
    <Text style={formStyle.label}>{label}</Text>
    <TextInput
      style={formStyle.textfield}
      placeholderTextColor="#828282"
      {...props}
    />
  </View>
);

export const RadioButton = ({label, ...props}) => (
    <View style={formStyle.row}>
    <Text style={formStyle.label}>{label}</Text>
    <RadioButton
      style={formStyle.textfield}
      placeholderTextColor="#828282"
      {...props}
    />
  </View>
);

export const ErrorText = ({ text = '' }) => (
  <Text style={styles.errorText}>{text}</Text>
)