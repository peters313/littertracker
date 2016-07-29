import React, {Component} from 'react'
import  {AppRegistry, View, Text, Image} from 'react-native';

class littertracker extends Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
  <Image
    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
  />
</View>
);
}
}


AppRegistry.registerComponent('littertracker', () => littertracker);
