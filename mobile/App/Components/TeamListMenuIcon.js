//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text,Image, TouchableOpacity  } from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item
import { MaterialIcons } from '@expo/vector-icons';

export default class TeamListMenuIcon extends Component {
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
    render() {
        return (
        <View style={this.props.menustyle}>
            <Menu
            ref={this.setMenuRef}
            button={
                <TouchableOpacity onPress={this.showMenu}>
                    <MaterialIcons name="add" size={45} />
                </TouchableOpacity>
            }>
            <MenuItem onPress={this.option1Click}>{this.props.title}</MenuItem>
            <MenuItem onPress={this.option2Click}>Join Team</MenuItem>
            </Menu>
        </View>
        );
    }
    }
