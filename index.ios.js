'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Image, View} from 'react-native';
var Login = require('./Login');
var Header = require('./Header');
var Footer = require('./Footer');

class littertracker extends Component {
  render() {
    return (
        <View>
        <Header />
        <Login />
        <Footer />
        </View>
    );
  }
}

AppRegistry.registerComponent('littertracker', () => littertracker);
