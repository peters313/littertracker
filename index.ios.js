'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
var Login = require('./Login');

class littertracker extends Component {
  render() {
    return (
        <Login />
    );
  }
}

AppRegistry.registerComponent('littertracker', () => littertracker);
