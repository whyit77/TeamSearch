import { createStackNavigator } from 'react-navigation-stack';
import createAccount from '../screens/create_acc';
import createTeam from '../screens/create_team';
import Header from '../components/Header';
import React from 'react';

const screens = {
    createAccount: {
        screen: createAccount,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Create Account'/>
            }
        }
    },
    createTeam: {
        screen: createTeam,
         
    }
}

const CreateStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100}
    }
})

export default CreateStack;