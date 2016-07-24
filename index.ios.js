'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

class littertracker extends Component {
  render() {
    return (
        <Text style={styles.welcome}>Hello World!
        </Text>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('littertracker', () => littertracker);
