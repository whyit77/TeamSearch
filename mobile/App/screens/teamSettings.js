// App/screens/teamSettings.js

import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";
import { navigation, StackActions, NavigationActions } from 'react-navigation';

import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: "black",
        fontSize: 25,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600"
    },
    safearea: {
        flex: 1,
        marginTop: 100,
        justifyContent: "space-between"
    }
});

class teamSettings extends React.Component {
    state = {

    };

    render() {


        return (
            <View
                style={[
                    styles.container,
                    { backgroundColor: this.props.navigation.getParam("color") }
                ]}
            >
                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.safearea}>
                    <View>
                        <Text style={styles.text}> team settings here </Text>
                    </View>

                </SafeAreaView>

            </View>
        );
    }
}

export default teamSettings;