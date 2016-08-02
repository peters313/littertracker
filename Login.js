'use strict';

const React = require('react');
const ReactNative = require('react-native');
const { AppState, Text, View, TextInput, TouchableHighlight, StyleSheet } = ReactNative;

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
        padding: 10}}>
        <Text style={{color:'red'}}>Litter Tracker Login</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           placeholder="Username"/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             placeholder="Password"/>
             <TouchableHighlight style={styles.button}>
                 <Text style={styles.buttonText}>Log in</Text>
             </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  button: {
      height: 50,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      alignSelf: 'stretch',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
  },
  buttonText: {
      color: '#fff',
      fontSize: 24
  }
})

module.exports = Login;
