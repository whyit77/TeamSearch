import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	TouchableOpacity,
	StyleSheet,
	View,
	StatusBar,
} from 'react-native';
import { TextField, ErrorText } from '../components/Form';
import { Button } from '../components/Button';
import {
	buttonStyle,
	mainStyle,
	exampleText,
	formStyle,
	teamListStyle,
} from '../styles/styles';

// import { AuthContext } from "../context/auth-context";
//////// TODO: LEARN TO DO AUTH TO HAVE LOGGED IN ID //////////////////

const initialState = {
	username: '',
	password: '',
	error: '',
};

export default class Login extends React.Component {
	// static contextType = AuthContext;

	state = initialState;

	handleSubmit = () => {
		const username = this.state.username;
		const password = this.state.password;

		let requestBody = {
			query: `
        query Login($username: String!, $password: String!) {
          login(username: $username, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
			variables: {
				username: username,
				password: password,
			},
		};

		// CHECK IP ADDRESS //////////////////////////////////////////////////////////////////////////////
		fetch('http://<IPv4>:3000/graphql', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(async res => {
				const responseJson = await res.json();

				if (res.ok) {
					console.log('Okay LOGIN');
					this.props.navigation.navigate('TeamListView');
					this.setState(initialState);
					return responseJson;
				}

				this.setState(initialState);
				this.setState({ error: responseJson.errors[0].message });
				throw new Error(responseJson.error);
			})
			// .then(resData => {
			//   if (resData.data.login.token) {
			//     //////////////
			//     this.context.Login(
			//       resData.data.login.token,
			//       resData.data.login.userId,
			//       resData.data.login.tokenExpiration
			//     );
			//   }
			// })
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		return (
			<View style={mainStyle.toplevel}>
				<View style={formStyle.formContainer}>
					<StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

					<ScrollView contentContainerStyle={formStyle.formContainer}>
						<View style={formStyle.formContainer}>
							<Text style={formStyle.label}>Username</Text>
							<TextField
								//label="Username"
								placeholder="Username"
								onChangeText={username => this.setState({ username })}
								value={this.state.username}
								autoCapitalize="none"
								style={formStyle.placeholderStyle}
								color="white"
								selectionColor="red"
								keyboardAppearance="dark"
								// keyboardType="username"
								labelTextColor="white"
								// textContentType="username"
							/>
							<Text style={formStyle.label}>Password</Text>
							<TextField
								//label="Password"
								placeholder="Password"
								secureTextEntry
								onChangeText={password => this.setState({ password })}
								value={this.state.password}
								autoCapitalize="none"
								style={formStyle.placeholderStyle}
								color="white"
								selectionColor="red"
								keyboardAppearance="dark"
							/>
							<View style={formStyle.textBlock}>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Reset')}
								>
									<Text style={[formStyle.text, formStyle.link]}>
										Forgot Password?
									</Text>
								</TouchableOpacity>
							</View>
							<ErrorText text={this.state.error} />
							<View style={formStyle.formButtonContainer}>
								<Button
									style={formStyle.formButton}
									text="Submit"
									color="white"
									onPress={this.handleSubmit}
								/>
							</View>
							<View>
								<Text style={formStyle.text}>Don't have an account?</Text>
								<TouchableOpacity
									onPress={() =>
										this.props.navigation.navigate('CreateAccount')
									}
								>
									<Text style={[formStyle.text, formStyle.link]}>
										Create New Account
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}
