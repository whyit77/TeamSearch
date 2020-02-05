import { createStackNavigator } from 'react-navigation-stack';
import FirstTimeCreation from '../screens/createAcc';
import Header from '../components/header';
import React from 'react';

const screens = {
    FirstTimeCreation: {
        screen: FirstTimeCreation,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='First Time User Creation'/>
            }
        }
    }
}

const FirstTimeCreationStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100}
    }
})

export default FirstTimeCreationStack;