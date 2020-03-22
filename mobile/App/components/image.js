import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';


export const ImageField = ({
	topLabel = '',
	onTopPress = () => {},
	topLabelStyles = {},
	bottomLabel = '',
	onBottomPress = () => {},
	bottomLabelStyles = {},
	source = {
		uri:
			'https://i.ya-webdesign.com/images/white-camera-png-7.png',
	},
	imageStyles = {},
	viewStyles = {},
	...props
}) => (
	<View style={[styles.column, viewStyles]}>
		{topLabel === '' ? null : (
			<Text style={[styles.label, topLabelStyles]} onPress={onTopPress}>
				{topLabel}
			</Text>
		)}
		<Image style={[styles.image, imageStyles]} source={source} {...props} />
		{bottomLabel === '' ? null : (
			<Text style={[styles.label, bottomLabelStyles]} onPress={onBottomPress}>
				{bottomLabel}
			</Text>
			
		)}
	</View>
);

const styles = StyleSheet.create({
	column: {
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
	},
	label: {
		color: 'white',
		fontSize: 14,
		fontWeight: '200',
		marginBottom: 4,
	},
	image: {
		width: 75,
		height: 75,
		resizeMode: 'contain',
	},
});