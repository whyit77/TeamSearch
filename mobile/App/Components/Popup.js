import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CreateTeam from '../screens/createTeam';
import { MaterialIcons } from '@expo/vector-icons';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default HeaderPopup = () => (
      <MenuContext style={styles.header}>
        <View>
          <Menu>
            <MenuTrigger> 
            <MaterialIcons name="add" size={45} />
            </MenuTrigger>

            <MenuOptions>
              <MenuOption onSelect={() => navigation.navigate(CreateTeam)} text="Create Team" />
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert(`Not called`)}
                disabled={true}
                text="Disabled"
              />
            </MenuOptions>
          </Menu>
        </View>
      </MenuContext>
)

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 200,
      color: "#000000",
      textAlign: "center"
    },
    icon: {
        position: 'absolute',
        right: 16,
        color: 'white'
    }
  });