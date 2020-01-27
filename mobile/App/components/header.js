import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const screen = Dimensions.get('screen');

export default function Header({ navigation, title }) {
  const openMenu = () => {
      navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
        <View>
        <Text style={styles.headerText}>{ title }</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    width: screen.width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    
    },
    headerText: {
      fontWeight: 'bold',
      color: '#333',
      letterSpacing: 1,
      fontSize:30,
      fontFamily: 'Courier',
    },
    icon: {
        position: 'absolute',
        left: 16,
    }
  });