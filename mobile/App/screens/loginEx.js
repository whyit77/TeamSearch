import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Lets Start with a button!</Text>
    <View>
    <TouchableOpacity style={styles.buttonPrimary}><Text> yes ma'am</Text></TouchableOpacity>
    </View>
  </View>
);