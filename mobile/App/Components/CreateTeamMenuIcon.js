import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet  } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { MaterialIcons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input-custom';

export default class CreateTeamMenuIcon extends Component {
    
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
    state = {
        dialogIsVisible: false
    }
    option2Click = () => {
        this.setState({ dialogIsVisible: true })
    };
    render() {
        return (
        <View style={this.props.menustyle}>
            <Menu
            ref={this.setMenuRef}
            button={
                <TouchableOpacity onPress={this.showMenu}>
                    <MaterialIcons name="add" size={40} style={{ color: 'white', marginRight: 10 }}/>
                </TouchableOpacity>
            }>
            <MenuItem onPress={this.option1Click}>{this.props.option1}</MenuItem>
            <MenuItem onPress={this.option2Click}>{this.props.option2}</MenuItem>
            <View style={styles.container}>
                <DialogInput
                dialogIsVisible={this.state.dialogIsVisible}
                closeDialogInput={() => this.setState({ dialogIsVisible: false })}
                submitInput={(textValue) => console.warn(textValue)}
                outerContainerStyle={{ backgroundColor: 'rgba(0,0,0, 0.75)' }}
                containerStyle={{ backgroundColor: 'rgba(255,0,0, 0.2)'}}
                titleStyle={{ color: 'white' }}
                title="Join a Team"
                subTitleStyle={{ color: 'white' }}
                subtitle="Please enter the team code"
                placeholderInput="Team Code"
                placeholderTextColor="gray"
                textInputStyle={{ borderColor: 'black', borderWidth: 2 }}
                secureTextEntry={false}
                buttonsStyle={{ borderColor: 'white' }}
                textCancelStyle={{ color: 'white' }}
                submitTextStyle={{ color: 'white'}}
                cancelButtonText="CANCEL"
                submitButtonText="OK"
                />
            </View>
            </Menu>
        </View>
        );
    }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
    });