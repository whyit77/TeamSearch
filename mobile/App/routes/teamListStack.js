import { createStackNavigator } from 'react-navigation-stack';
import TeamListView from '../screens/teamListView';
import Header from '../components/header';
import React from 'react';

const screens = {
    TeamListView: {
        screen: TeamListView,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Team List View'/>
            }
        }
    }
}

const TeamListStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100}
    }
})

export default TeamListStack;