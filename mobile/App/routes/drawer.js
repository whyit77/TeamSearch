import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import LoginStack from './loginStack';
import CreateStack from './createStack';

const RootDrawerNavigator = createDrawerNavigator({
    Login: {
        screen: LoginStack
    },
    Create: {
        screen: CreateStack,
    }
})

export default createAppContainer(RootDrawerNavigator);