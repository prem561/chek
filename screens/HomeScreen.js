import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function HomeScreen() {
	

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/images/background_one.png')}
				style={{ width: '100%', height: '100%' }}
			>
				<View style={styles.welcomeContainer}>
					<Image
						source={__DEV__ ? require('../assets/images/logo.png') : require('../assets/images/logo.png')}
						style={styles.welcomeImage}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 36
	},
	headerBg: {},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center'
	},
	contentContainer: {
		paddingTop: 30
	},

	welcomeContainer: {
		alignItems: 'center',
		marginTop: 80,
		marginBottom: 20
	},
	welcomeImage: {
		width: 88.5,
		height: 117.8,
		resizeMode: 'contain',
		marginTop: 3
	},
	welcome2Image: {
		width: 234.9,
		// height: 234.9,
		resizeMode: 'contain'
	},
	hedaer: {
		fontWeight: 'bold',
		fontSize: 20
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50
	},
	homeScreenFilename: {
		marginVertical: 7
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)'
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4
	},
	title: {
		fontSize: 16,
		fontFamily: 'lato-bold',
		color: '#000000',
		fontWeight: 'bold',
		color: 'rgba(96,100,109, 1)',
		lineHeight: 19,
		textAlign: 'center'
	},
	description: {
		fontSize: 16,
		lineHeight: 20,
		fontFamily: 'lato-regular',
		// color:'#666666',
		color: 'rgba(102,102,102,0.60)',
		textAlign: 'center',
		opacity: 60,
		marginLeft: 100,
		marginRight: 100
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center'
	},
	navigationFilename: {
		marginTop: 5
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center'
	},
	helpLink: {
		paddingVertical: 15
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7'
	}
});
