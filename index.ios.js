'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
var Login = require('./Login');
var TopStatusBar = require('./TopStatusBar');

class littertracker extends Component {
  render() {
    return (
        <TopStatusBar />
        <Login />
    );
  }
}

AppRegistry.registerComponent('littertracker', () => littertracker);
