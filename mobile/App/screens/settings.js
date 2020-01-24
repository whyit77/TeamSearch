// App/screens/Settings.js

import React from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
    Alert,
    Button,
} from "react-native";

// import { Button } from "../components/Button";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20
    },
    text: {
        color: "black",
        fontSize: 15,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600"
    },

    disabledText: {
        color: "#c4c0bd",
        fontSize: 15,
        textAlign: "center",
        letterSpacing: -0.02,
        fontWeight: "600"
    },
    safearea: {
        flex: 1,
        marginTop: 100,
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "#808080",
        // height: Math.floor(buttonWidth - 10),
        alignSelf: "center",
        justifyContent: "center"
        // borderRadius: Math.floor(buttonWidth),
        // margin: 25
    }
});

class Settings extends React.Component {
    state = {

    };

    render() {
        const { navigate } = this.props.navigation;


        return (


            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: "white",
                        backgroundImage: this.props.navigation.getParam("bImage")
                    }
                ]}
            >
                <StatusBar barStyle="light-content" />



            </View >
        );
    }
}

export default Settings;