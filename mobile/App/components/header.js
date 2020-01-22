import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View styles={ styles.header }>
        <View>
            <Text style={styles.headerText}></Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alingItmes: 'center'
    }
})