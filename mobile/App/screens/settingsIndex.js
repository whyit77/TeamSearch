// App/screens/settingsIndex.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";


import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { RowItem } from "../components/RowItem";
import userSettings from "../screens/userSettings";

const MainStack = createStackNavigator({
    userSettings: {
        screen: userSettings,
        navigationOptions: {
            headerTitle: "userSettings"
        }
    },

});


export default ({ navigation }) => (
    <ScrollView>
        <StatusBar barStyle="dark-content" />
        <RowItem
            name="User Settings"
            color="black"
            onPress={() =>
                this.props.navigation.navigate('userSettings', {})}


        />
        <RowItem
            name="Team Settings"
            color="black"
        />


    </ScrollView>

);