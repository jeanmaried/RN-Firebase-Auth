import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBYC1k7jB2o5-EDaw09NEKRHxcW5XWPmMo',
      authDomain: 'react-native-auth-36df1.firebaseapp.com',
      databaseURL: 'https://react-native-auth-36df1.firebaseio.com',
      projectId: 'react-native-auth-36df1',
      storageBucket: 'react-native-auth-36df1.appspot.com',
      messagingSenderId: '640214940691'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
