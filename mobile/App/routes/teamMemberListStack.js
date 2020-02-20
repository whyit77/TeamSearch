import { createStackNavigator } from 'react-navigation-stack';
import TeamMemberList from '../screens/TeamMemberList';
import Header from '../components/Header';
import React from 'react';

const screens = {
    TeamMemberList: {
        screen: TeamMemberList,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Team Members'/>
            }
        }
    }
}

const TeamMemberListStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default TeamMemberListStack;