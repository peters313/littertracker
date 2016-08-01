'use strict';

const React = require('react');
const ReactNative = require('react-native');
const { AppState, Text, View, TextInput } = ReactNative;
var TopStatusBar = require('./StatusBar');

class Login extends React.Component {
  constructor(props) {
  super(props);
  this.state = { text: 'Useless Placeholder' };
}
    render() {
      return(
        <View>
        <TopStatusBar />
        <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
    />
</View>
      )
    }
};

module.exports = Login;
