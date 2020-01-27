// App/screens/settingsIndex.js

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";


import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
    <ScrollView>
        <StatusBar />

        <RowItem
            name="14. Menu"
            color="gray"
            onPress={() =>
                navigation.navigate('menu')}
        />
        <RowItem
            name="15. Settings"
            color="black"
            onPress={() =>
                navigation.navigate('settings')}

        />
        <RowItem
            name="16. User Settings"
            color="black"
            onPress={() =>
                navigation.navigate('userSettings')}

        />
        <RowItem
            name="17. Team Settings"
            color="black"
            onPress={() =>
                navigation.navigate('teamSettings')}
        />

        <RowItem
            name="18. Create Pin"
            color="gray"
            onPress={() =>
                navigation.navigate('createPin')}
        />
        <RowItem
            name="19. Pin Info"
            color="gray"
            onPress={() =>
                navigation.navigate('pinInfo')}
        />




    </ScrollView>

);