import { createStackNavigator } from 'react-navigation-stack';
import UserSettings from '../screens/userSettings';
import Header from '../Components/header';
import React from 'react';

const screens = {
    UserSettings: {
        screen: UserSettings,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Settings'/>
            }
        }
    }
}

const SettingsStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100}
    }
})

export default SettingsStack;