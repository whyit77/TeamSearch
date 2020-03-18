import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Text,
} from 'react-native';

import { WebView } from 'react-native-webview';

const Screen = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: Screen.height,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowRadius: 0,

    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    topBar: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    input: {
        backgroundColor: '#fff',
        padding: 0,
        margin: 0,
        borderRadius: 0,
    },
    inputText: {
        color: '#3d3c41',
    },
});

export const EmbeddedWebView = ({ url }) => (
    <View style={styles.container}>

        <WebView
            source={{ uri: url }}
            startInLoadingState
            renderLoading={() => (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" />
                </View>
            )}
        />
    </View>
);