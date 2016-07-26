'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import textInput from './app/components/textInput'

class littertracker extends Component {
  render() {

    return (

        <View>
          <textInput>
        <Text style={styles.welcome}>Welcome to your Litter Tracker!
        </Text>
        </textInput>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
    marginTop: 50,
    backgroundColor: 'skyblue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('littertracker', () => littertracker);
