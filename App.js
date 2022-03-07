import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import SignUp from './components/SignUp';

export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      input: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 20,
        fontStyle: 'italic',
      },
    });
    return (
      <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.text}>Please Create an Account!</Text>
        <StatusBar style="auto" />
      </View>
        <SignUp />
      </View>
    )
  }
}

