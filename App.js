import React from 'react';
import {
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Text, View
} from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Routes from './src/routes';

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
