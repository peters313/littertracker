'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
var Login = require('./Login');

class littertracker extends Component {
  render() {
    return (
        <View>
        <Login />
        </View>
    );
  }
}

AppRegistry.registerComponent('littertracker', () => littertracker);
