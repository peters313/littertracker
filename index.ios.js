'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
var Login = require('./Login');
var Header = require('./Header');

class littertracker extends Component {
  render() {
    return (
        <View>
        <Header />
        <Login />
        </View>
    );
  }
}

AppRegistry.registerComponent('littertracker', () => littertracker);
