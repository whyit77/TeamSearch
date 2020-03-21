import { createStackNavigator } from 'react-navigation-stack';
import CreateNewGroup from '../screens/CreateTeam';
import DefineSearchArea from '../screens/DefineSearchArea';
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
    },
    DefineSearchArea: {
        screen: DefineSearchArea,
        navigationOptions: () => {
            return {
                headerTitle: 'Define Search Area',
                headerTintColor: 'white',
            }
        }
    }
}

const CreateGroupStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        // headerTintColor: '#444',
        headerStyle: { 
            backgroundColor: '#292929', 
            height: 100
        }
    }
})

export default CreateGroupStack;