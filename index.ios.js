import App from './app';

export default App;

// 'use strict'
// import React, { Component } from 'react';
// import {AppRegistry, StyleSheet, Text, View } from 'react-native';
// import textInput from './app/components/textInput'
//
// class littertracker extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {text: ''};
// }
//   render() {
//
//     return (
//       <View style={{padding: 10}}>
//               <TextInput
//                 style={{height: 40}}
//                 placeholder="Type here to translate!"
//                 onChangeText={(text) => this.setState({text})}
//               />
//               <Text style={{padding: 10, fontSize: 42}}>
//                 {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//               </Text>
//             </View>
//         <View>
//         <Text style={styles.welcome}>Welcome to your Litter Tracker!
//         </Text>
//         </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 15,
//     marginTop: 50,
//     backgroundColor: 'skyblue'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('littertracker', () => littertracker);
