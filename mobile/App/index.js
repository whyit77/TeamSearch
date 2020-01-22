import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux'
//import SafeAreaView from 'react-native-safe-area-view';
// import { store } from './redux/store'

import { exampleButton, exampleStyle} from './styles/exampleStyles';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import exampleScreen from './screens/exampleScreen';

import ExampleComponents from './Components/Screen';

const AppStack = createStackNavigator({
  ExampleScreen: {
    screen: exampleScreen,
      navigationOptions: {
        // headerTitle: 'Example Screen',
        // headerTitle: null,
        // headerStyle: {
        //   backgroundColor: 'grey'
        // },
        // headerTitleStyle: {
        //   color: 'white'
        // },
      }
  }
})

const AppContainer = createAppContainer(AppStack);

export default class App extends React.Component {
  render() {
   return (
      <AppContainer/>
    );
  }
}
// export default () => (
//   <View style={exampleStyle.container}>
//     <Text style={exampleStyle.textStyle}>Lets Start with a button!</Text>
//     <View>
//     <TouchableOpacity style={styles.exampleButton}><Text> yes ma'am</Text></TouchableOpacity>
//     </View>
//   </View>
// );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
}
});