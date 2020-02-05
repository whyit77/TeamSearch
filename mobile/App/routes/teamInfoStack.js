import { createStackNavigator } from 'react-navigation-stack';
import TeamInfo from '../screens/TeamInfo';
import Header from '../components/header';
import React from 'react';

const screens = {
    TeamInfo: {
        screen: TeamInfo,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Team Info'/>
            }
        }
    }
}

const TeamInfoStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100}
    }
})

export default TeamInfoStack;