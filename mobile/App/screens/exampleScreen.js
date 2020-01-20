import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import style from '../styles/exampleStyles'

// const ExampleScreen = () => {
//     return <Text style={styles.textStyle}> Example Component Screen </Text>
// }


class ExampleScreen extends React.Component{

    render() {
        return (
            <View style={style.container}>
             <Text style={style.textStyle}>Lets Start with a button!</Text>
             <View>
             <TouchableOpacity style={style.exampleButton}><Text> yes ma'am</Text></TouchableOpacity>
             </View>
             </View>

        )
    }
}

// const styles = StyleSheet.create({
//     textStyle: {
//         fontSize: 30,
//     }
// })


export default ExampleScreen;