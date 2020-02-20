import { createStackNavigator } from 'react-navigation-stack';
import CreateNewGroup from '../screens/createTeam';
import Header from '../components/Header';
import React from 'react';

const screens = {
    CreateNewGroup: {
        screen: CreateNewGroup,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Create New Group'/>
            }
        }
    }
}

const CreateGroupStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        // headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default CreateGroupStack;