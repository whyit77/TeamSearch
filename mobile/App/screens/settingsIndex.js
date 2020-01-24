// App/screens/settingsIndex.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";


import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
    <ScrollView>
        <StatusBar barStyle="dark-content" />
        <RowItem
            name="Settings"
            color="black"
            onPress={() =>
                navigation.navigate('settings')}

        />
        <RowItem
            name="User Settings"
            color="black"
            onPress={() =>
                navigation.navigate('userSettings')}

        />
        <RowItem
            name="Team Settings"
            color="black"
            onPress={() =>
                navigation.navigate('teamSettings')}
        />
        <RowItem
            name="Team List"
            color="gray"
            onPress={() =>
                navigation.navigate('teamList')}
        />
        <RowItem
            name="Create Pin"
            color="gray"
            onPress={() =>
                navigation.navigate('createPin')}
        />
        <RowItem
            name="Pin Info"
            color="gray"
            onPress={() =>
                navigation.navigate('pinInfo')}
        />




    </ScrollView>

);