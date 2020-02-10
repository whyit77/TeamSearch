// App/screens/userSettings.js

import React from 'react';
import {
	TextInput,
	Switch,
	Text,
	View,
	StyleSheet,
	Image,
	Alert,
	Button,
} from 'react-native';
import { ImageField } from '../components/image';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	underline: { textDecorationLine: 'underline' },
});

export default class App extends React.Component {
	state = {
		switchITValue: false,
		switchLTValue: false,
		name: '',
		email: '',
		certOrDescript: '',
		cell: '',
		changePass: '',
		confirmPass: '',
	};

	toggleITSwitch = value => {
		this.setState({ switchITValue: value });
	};

	toggleLTSwitch = value => {
		this.setState({ switchLTValue: value });
	};

	render() {
		return (
			<View style={styles.container}>
				<ImageField
					imageStyles={{ width: 75, height: 75 }}
					source={{
						uri:
							'https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png',
					}}
					bottomLabel="Change Photo"
					onBottomPress={() => Alert.alert('Navigate to Change Photo Page')}
					bottomLabelStyles={styles.underline}
				/>

				<TextInput
					onChangeText={name => this.setState({ name })}
					placeholder="Name"
					maxLength={40}
				/>

				<TextInput
					onChangeText={email => this.setState({ email })}
					placeholder="Email"
					maxLength={40}
				/>

				<TextInput
					onChangeText={cert => this.setState({ cert })}
					placeholder="Certifications/Descriptions"
					maxLength={250}
				/>

				<TextInput
					onChangeText={cell => this.setState({ cell })}
					placeholder="Cell #"
					maxLength={40}
				/>

				<Text> View Inactive Teams </Text>

				<Switch
					style={{ marginTop: 30 }}
					onValueChange={this.toggleITSwitch}
					value={this.state.switchITValue}
				/>
				<Text>{this.state.switchITValue ? 'ON' : 'OFF'}</Text>

				<Text> Location Tracking </Text>
				<Switch
					style={{ marginTop: 30 }}
					onValueChange={this.toggleLTSwitch}
					value={this.state.switchLTValue}
				/>
				<Text>{this.state.switchLTValue ? 'ON' : 'OFF'}</Text>

				<TextInput
					onChangeText={changePass => this.setState({ changePass })}
					placeholder="Change Password"
					maxLength={40}
				/>

				<TextInput
					onChangeText={confirmPass => this.setState({ confirmPass })}
					placeholder="Confirm Password"
					maxLength={40}
				/>

				<Button title="Save" />
			</View>
		);
	}
}
