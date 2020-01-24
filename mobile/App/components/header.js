import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    }
})

export default function Header() {
    return (
        <View style={ styles.header }>
        <View>
            <Text style={styles.headerText}>Team Info</Text>
        </View>
        </View>
    )
}