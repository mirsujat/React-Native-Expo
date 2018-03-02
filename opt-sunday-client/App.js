import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDzkDeocbdACv9wceEWnyAgb1YDvJvivSs',
      authDomain: 'otp-sunday.firebaseapp.com',
      databaseURL: 'https://otp-sunday.firebaseio.com',
      projectId: 'otp-sunday',
      storageBucket: 'otp-sunday.appspot.com',
      messagingSenderId: '1084193189498'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
