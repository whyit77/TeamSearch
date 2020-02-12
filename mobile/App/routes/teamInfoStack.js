import { createStackNavigator } from 'react-navigation-stack';
import TeamInfo from '../screens/TeamInfo';
import Header from '../components/Header';
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
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default TeamInfoStack;