'use strict'
import React, { Component } from 'react';
import { View, Image } from 'react-native';
var backgroundImg = require('./mainImage.png');


class mainImage extends Component {
  render(){
    return(
      <View>
      <backgroundImg />
      </View>
    )
  }
};

module.exports = mainImage;
