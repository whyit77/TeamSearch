import { createStackNavigator } from 'react-navigation-stack';
import TeamListView from '../screens/TeamList';
import CreateTeam from '../screens/createTeam';
import Header from '../components/Header';
import PopupMenu from '../components/PopupMenu';
import TeamListMenuIcon from '../components/TeamListMenuIcon';
import React from 'react';
import { View, Text, Button } from 'react-native';
import DialogInput from 'react-native-dialog-input';

const screens = {
    TeamListView: {
        screen: TeamListView,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Team List View'/>,
                headerRight: (  
                    <TeamListMenuIcon 
                        title="Create Team"
                        menutext="Menu"
                        menuStyle= {{
                            marginRight: 40,
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}
                        textStyle={{
                            color:'red'
                        }}
                        option1Click={() => {
                            navigation.navigate('CreateTeam')
                        }}
                        option2Click={() => {
                            alert('Team Code Input')
                        }}
                    />
                ),
            }
        }
    },
    CreateTeam: {
        screen: CreateTeam,
    }
}

const TeamListStack = createStackNavigator( screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#292929', height: 100}
    }
})

export default TeamListStack;