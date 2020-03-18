import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	TouchableOpacity,
	StyleSheet,
	View,
	SafeAreaView,
	StatusBar,
} from 'react-native';
import { Team } from '../components/Team';
import { mainStyle } from '../styles/styles';
import CreateTeamMenuIcon from '../components/CreateTeamMenuIcon';
import { TeamListCard } from '../components/TeamListCard';

export default class TeamList extends Component {
	state = {
		name: '',
		status: '',
		admin: '',
		size: '',
		description: 'this is a description',
		userId: '5e7031dc9c7708107b2bfaa7',
		joinedTeams: [],
		createdTeams: [],
		count: 1,
	};

	handleSubmit = () => {
		let requestBody = {
			query: `
		      query getUser($userId: String!) {
		        getUser(userId: $userId) {
		          joinedTeams {
		            title
		            searchDescription
		            subjectDescription
		          }
		          createdTeams {
		            title
		          }
		        }
		      }
		    `,
			variables: {
				userId: this.state.userId,
			},
		};

		if (state.count == 1) {
			console.log('fetching...');

			fetch('http://172.17.62.12:3000/graphql', {
				method: 'POST',
				body: JSON.stringify(requestBody),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async res => {
					const responseJson = await res.json();

					console.log(responseJson);

					if (res.ok) {
						console.log('Okay Fetched Teams');
						this.setState(initialState);
						return responseJson;
					}

					this.setState(initialState);
					this.setState({ error: responseJson.errors[0].message });
					throw new Error(responseJson.error);
				})
				.catch(err => {
					console.log(err);
				});

			state.count = 2;
		}
	};

	static navigationOptions = ({ navigation }) => {
		return {
			headerRight: (
				<CreateTeamMenuIcon
					option1="Create Team"
					option2="Join Team"
					menuStyle={{
						marginRight: 40,
						flexDirection: 'row',
						justifyContent: 'flex-end',
					}}
					option1Click={() => {
						navigation.navigate('CreateTeam');
					}}
				/>
			),
		};
	};
	render() {
		return (
			<SafeAreaView style={mainStyle.toplevel}>
				<StatusBar barStyle="light-content" backgroundColor="#6a51ae" />

				<View style={mainStyle.container}>
					<ScrollView contentContainerStyle={mainStyle.container}>
						<View style={mainStyle.toplevel}>
							<TouchableOpacity>
								<Team
									name={'TeamSearch'}
									status={'Active'}
									admin={'Dr. Dan'}
									size={20}
									description={'Small boi'}
								></Team>
							</TouchableOpacity>
							<TouchableOpacity>
								<TeamListCard
									description={this.state.description}
								></TeamListCard>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
		);
	}
}
