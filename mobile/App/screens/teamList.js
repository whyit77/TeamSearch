// App/screens/teamList.js

import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
    <ScrollView>
        <StatusBar barStyle="dark-content" />
        <RowItem
            name="Team List"
            color="black"
            onPress={() =>
                navigation.navigate('teamList')}
        />

        <RowItem />

        <Text style={{ backgroundColor: 'white', alignSelf: 'center' }}>
            Team Name
</Text>

        <RowItem
            name="Team Info"
            color="black"
            onPress={() =>
                navigation.navigate('teamInfo')}
        />
        <RowItem
            name="Team Members"
            color="black"
            onPress={() =>
                navigation.navigate('teamMembers')}
        />
        <RowItem
            name="Map View"
            color="black"
            onPress={() =>
                navigation.navigate('mapView')}
        />
        <RowItem
            name="Team Alerts"
            color="black"
            onPress={() =>
                navigation.navigate('teamAlerts')}
        />
    </ScrollView>

);