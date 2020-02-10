// App/Components / Button.js

import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
	Switch as ReactSwitch,
} from 'react-native';

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#D22322',
		paddingVertical: 10,
		paddingHorizontal: 45,
		alignItems: 'center',
		marginHorizontal: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 20,
		justifyContent: 'space-between',
	},
	switch: {
		paddingVertical: 10,
		marginHorizontal: 15,
		marginTop: 5,
		marginBottom: 5,
		alignItems: 'center',
	},
	buttonLoading: {
		backgroundColor: '#E58E8D',
	},
	row: {
		marginHorizontal: 20,
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#E4E4E4',
		marginBottom: 5,
		marginTop: 5,
		alignItems: 'center',
	},
	text: {
		fontWeight: '500',
		fontSize: 12,
		color: '#4A4A4A',
	},
});

export const Button = ({
	text,
	onPress = () => {},
	loading = false,
	style = {},
}) => (
	<TouchableOpacity
		onPress={onPress}
		style={[styles.button, loading && styles.buttonLoading, style]}
		disabled={loading}
	>
		<Text style={styles.text}>{text}</Text>
	</TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
	<View style={styles.buttonContainer}>{children}</View>
);

export const Switch = ({
	headerText = '',
	buttonSwitchText = '',
	onValueChange = () => {},
	value,
	switchStyle = {},
	headerStyle = {},
	buttonSwitchStyle = {},
}) => (
	<View style={styles.row}>
		{headerText === '' ? null : <Text style={styles.text}>{headerText}</Text>}
		<ReactSwitch
			style={[styles.switch, switchStyle]}
			onValueChange={onValueChange}
			value={value}
		/>
		{buttonSwitchText === '' ? null : <Text style={styles.text}>{buttonSwitchText}</Text>}
	</View>
);
