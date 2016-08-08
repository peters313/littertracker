'use strict'
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Image, View} from 'react-native';
var Login = require('./Login');
var Header = require('./Header');
var Footer = require('./Footer');
var mainImage = require('./Image');

class littertracker extends Component {
  render() {
    return (
        <View>
        <Header />
        <mainImage />
        <Login />
        <Footer />
        </View>
    );
  }
}

AppRegistry.registerComponent('littertracker', () => littertracker);
