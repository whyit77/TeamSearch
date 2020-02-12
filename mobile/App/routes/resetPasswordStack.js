import { createStackNavigator } from 'react-navigation-stack';
import Reset from '../screens/resetPW';
import Header from '../Components/header';
import React from 'react';

const screens = {
    Reset: {
        screen: Reset,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Reset Password'/>
            }
        }
    }
}

const ResetPasswordStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default ResetPasswordStack;