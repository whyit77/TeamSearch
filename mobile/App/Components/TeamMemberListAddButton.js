import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet  } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import { MaterialIcons } from '@expo/vector-icons';
import DialogInput from 'react-native-dialog-input-custom';
import { Button } from 'react-native-dialog-input-custom/components/button';

export default class TeamMemberListAddButton extends Component {
    state = {
        dialogIsVisible: false
    }
    option1Click = () => {
        this.setState({ dialogIsVisible: true })
    };
    render() {
        return (
        <View style={this.props.menustyle}>
            <Button onPress={this.option1Click}>
                    <MaterialIcons name="add" size={40} style={{ color: 'white'}}/>
            </Button>
            <View style={styles.container}>
                <DialogInput
                dialogIsVisible={this.state.dialogIsVisible}
                closeDialogInput={() => this.setState({ dialogIsVisible: false })}
                submitInput={(textValue) => console.warn(textValue)}
                outerContainerStyle={{ backgroundColor: 'rgba(0,0,0, 0.75)' }}
                containerStyle={{ backgroundColor: 'rgba(255,0,0, 0.2)'}}
                titleStyle={{ color: 'white' }}
                title="Add a Team Member"
                subTitleStyle={{ color: 'white' }}
                subtitle="Please enter email address of the team member you wish to add"
                placeholderInput="Team Member"
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