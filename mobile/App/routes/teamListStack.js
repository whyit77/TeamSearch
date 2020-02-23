import { createStackNavigator } from 'react-navigation-stack';
import TeamListView from '../screens/TeamList';
import CreateTeam from '../screens/createTeam';
import Header from '../components/Header';
import React from 'react';

const screens = {
    TeamListView: {
        screen: TeamListView,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Team List View'/>,
            }
        }
    },
    CreateTeam: {
        screen: CreateTeam
    },
    
}

const TeamListStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default TeamListStack;