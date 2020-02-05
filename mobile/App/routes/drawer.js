import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import LoginStack from './loginStack';
import ResetPasswordStack from './resetPasswordStack';
import FirstTimeUserCreationStack from './firstTimeUserCreationStack';
import TeamListStack from './teamListStack';
import CreateGroupStack from './createNewGroupStack';
import TeamInfoStack from './teamInfoStack';
import TeamMemberListStack from './teamMemberListStack';
import MapViewStack from './mapViewStack';
import TeamAlertsStack from './teamAlertsStack';
import SettingsStack from './settingsStack';


const RootDrawerNavigator = createDrawerNavigator({
    Login: {
        screen: LoginStack
    },
    ResetPassword: {
        screen: ResetPasswordStack,
        navigationOptions: {
            title: 'Reset Password'
        }
    },
    FirstTimeUserCreation: {
        screen: FirstTimeUserCreationStack,
        navigationOptions: {
            title: 'First Time User Creation'
        }
    },
    TeamListView: {
        screen: TeamListStack,
        navigationOptions: {
            title: 'Team List View'
        }
    },
    CreateNewGroup: {
        screen: CreateGroupStack,
        navigationOptions: {
            title: 'Create New Group'
        }
    },
    TeamInfo: {
        screen: TeamInfoStack,
        navigationOptions: {
            title: 'Team Info'
        }
    },
    TeamMemberList: {
        screen: TeamMemberListStack,
        navigationOptions: {
            title: 'Team Member List'
        }
    },
    MapView: {
        screen: MapViewStack,
        navigationOptions: {
            title: 'Heatmap'
        }
    },
    TeamAlerts: {
        screen: TeamAlertsStack,
        navigationOptions: {
            title: 'Team Alerts'
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            title: 'Settings'
        }
    },
})

export default createAppContainer(RootDrawerNavigator);