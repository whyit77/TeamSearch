// App/screens/CreatePin.js

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
	StatusBar,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

import {
  buttonStyle,
  mainStyle,
  exampleText,
  formStyle,
  teamListStyle
} from "../styles/styles";
import { TextField, ErrorText } from "../components/Form";

export default class App extends React.Component {
	state = {
		switchITValue: false,
		switchLTValue: false,
		name: '',
		location: '',
		descr: '',
	};

	toggleITSwitch = value => {
		this.setState({ switchITValue: value });
	};

	toggleLTSwitch = value => {
		this.setState({ switchLTValue: value });
	};

	render() {
		return (
			<View style={formStyle.formContainer}>
				<StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

				<ScrollView contentContainerStyle={formStyle.formContainer}>
					<View style={mainStyle.container}>
						<Image
							style={{ width: 100, height: 100, color: 'white' }}
							color="white"
							source={{
								uri:
									'https://cdn4.iconfinder.com/data/icons/ios7-essence/23/device_camera_capture_photo__-512.png',
							}}
						/>

						<Text
							style={formStyle.link}
							onPress={() => Alert.alert('Navigate to Change Photo Page')}
						>
							Photo/Video of Clue
						</Text>
					</View>

					<TextField
						onChangeText={name => this.setState({ name })}
						placeholder="Name of Pin"
						maxLength={40}
					/>

					<TextField
						onChangeText={location => this.setState({ location })}
						placeholder="Location of Pin"
						maxLength={40}
					/>

					<TextField
						onChangeText={descr => this.setState({ descr })}
						placeholder="Description of Pin:"
						maxLength={250}
					/>
					<View style={mainStyle.container}>
						<TouchableOpacity style={buttonStyle.buttonContainer}>
							<Text style={buttonStyle.buttonText}>Create Pin</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	}
}
