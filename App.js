import React from 'react';
import { Button, View, Text,TouchableHighlight,Image,StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
