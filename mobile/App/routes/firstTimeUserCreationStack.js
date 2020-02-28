import { createStackNavigator } from 'react-navigation-stack';
import CreateAccount from '../screens/CreateAccount';
import Header from '../Components/Header';
import React from 'react';

const screens = {
    CreateAccount: {
        screen: CreateAccount,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Create Account'/>
            }
        }
    }
}

const FirstTimeUserCreationStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default FirstTimeUserCreationStack;