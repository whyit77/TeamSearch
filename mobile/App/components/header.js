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
        {/* <MaterialIcons name='add' size={28} onPress={openMenu} style={styles.icon}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
    flex: 1,
    width: screen.width,
    // height: screen.height/17,
    // marginBottom: -30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: '#292929',
    
    },
    headerText: {
      // fontWeight: 'bold',
      color: '#fff',
      letterSpacing: 1,
      fontSize:20,
      // fontFamily: 'Cochin',
    },
    icon: {
        position: 'absolute',
        left: 16,
        color: 'white'
    }
  });