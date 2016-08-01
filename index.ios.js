'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Navigator} from 'react-native';
var Login = require('./Login');


class littertracker extends Component {
  render() {
    return (
        <Navigator/>
        <View>
        <Login />
        </View>
    );
  }
}

AppRegistry.registerComponent('littertracker', () => littertracker);
