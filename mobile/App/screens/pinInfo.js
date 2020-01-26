import React from 'react';
import { TextInput, Switch, Text, View, StyleSheet, Image, Alert, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    underline: { textDecorationLine: 'underline' }
});

export default class App extends React.Component {

    state = {
        switchITValue: false, switchLTValue: false,
        name: "", location: "", descr: ""
    };


    toggleITSwitch = value => {
        this.setState({ switchITValue: value });
    };

    toggleLTSwitch = value => {
        this.setState({ switchLTValue: value });
    };

    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png' }}
                />

                <TextInput
                    onChangeText={(location) => this.setState({ location })}
                    placeholder="Name of pin"
                    maxLength={40}
                />


                <Text> Pinned By: (Name Here) </Text>

                <TextInput
                    onChangeText={(descr) => this.setState({ descr })}
                    placeholder="Description of pin:"
                    maxLength={250}
                />


                <Button
                    title="Apply Changes"
                />

            </View>
        );
    }
}
