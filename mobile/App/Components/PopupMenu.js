import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class PopupMenu extends Component {
  _menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };
  showMenu = () => {
    this._menu.show();
  };
  hideMenu = () => {
    this._menu.hide();
  };
  option1Click = () => {
    this._menu.hide();
    this.props.option1Click();
  };
  option2Click = () => {
    this._menu.hide();
    this.props.option2Click();
  };
  option3Click = () => {
    this._menu.hide();
    this.props.option3Click();
  };
  option4Click = () => {
    this._menu.hide();
    this.props.option4Click();
  };
  render () {
    return (
      <View style={this.props.menustyle}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Text onPress={this.showMenu} style={this.props.textStyle}>
              {this.props.menutext}
            </Text>
          }>
          <MenuItem onPress={this.option1Click}>{this.props.title}</MenuItem>
          <MenuItem onPress={this.option2Click}>op2:Demo Option</MenuItem>
          <MenuItem onPress={this.option3Click} disabled>
            op3:Disabled option
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.option4Click}>
            op4:Option After Divider
          </MenuItem>
        </Menu>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//     header: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     text: {
//       fontSize: 200,
//       color: "#000000",
//       textAlign: "center"
//     },
//     icon: {
//         position: 'absolute',
//         right: 16,
//         color: 'white'
//     }
//   });