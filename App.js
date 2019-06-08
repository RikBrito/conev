import React from 'react';
import {
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, View
} from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

import Routes from './src/routes';

const firebaseConfig = {
  apiKey: 'AIzaSyBYOt4BXvodbG71QQUp_UuNzyL0zWmNz7I',
  authDomain: 'conev-b8fce.firebaseapp.com',
  databaseURL: 'https://conev-b8fce.firebaseio.com',
  projectId: 'conev-b8fce',
  storageBucket: 'conev-b8fce.appspot.com',
  messagingSenderId: '688270298055',
  appId: '1:688270298055:web:451c002f6c47c22e'
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
  }

  render() {
    return (
      <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Routes />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
