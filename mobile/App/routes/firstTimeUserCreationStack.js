import { createStackNavigator } from 'react-navigation-stack';
import ComponentsCreation from '../screens/CreateAccount';
import Header from '../Components/header';
import React from 'react';

const screens = {
    ComponentsCreation: {
        screen: ComponentsCreation,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='First Time User Creation'/>
            }
        }
    }
}

const ComponentsCreationStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default ComponentsCreationStack;