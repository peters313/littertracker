'use strict'
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Footer extends Component {
  render(){
    return(
      <View>
      <Text style={styles.text}>FOOTER</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'black'
  }
});

module.exports = Footer;
