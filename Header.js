'use strict'
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Header extends Component {
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
    marginTop: 18,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'black'
  }
});

module.exports = Header;
