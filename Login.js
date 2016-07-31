'use strict';

const React = require('react');
const ReactNative = require('react-native');
const { AppState, Text, View, TextInput } = ReactNative;

class Login extends React.Component {
  constructor(props) {
  super(props);
  this.state = { text: 'Useless Placeholder' };
}
    render() {
      return(
        <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
    />
      )
    }
};

module.exports = Login;
