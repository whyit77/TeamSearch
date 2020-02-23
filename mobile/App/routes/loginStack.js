import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/login';
import Header from '../components/Header';
import React from 'react';
import  TeamList from '../screens/TeamList';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Login'/>
            }
        }
    },
    TeamList: {
        screen: TeamList,
        navigationOptions: {
            title: 'Team List'
        }
    }
}

const LoginStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default LoginStack;