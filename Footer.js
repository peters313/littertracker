'use strict'
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Footer extends Component {
  render(){
    return(
      <View>
      <Text style={styles.text}>Litter Tracker</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'black',
    marginTop: 200
  }
});

module.exports = Footer;
