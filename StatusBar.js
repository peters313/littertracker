'use strict';

const React = require('react');
const ReactNative = require('react-native');
const { AppState, View, StatusBar } = ReactNative;

class TopStatusBar extends React.Component {

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          />
        <Navigator
          initialRoute={{statusBarHidden: true}}
          renderScene={(route, navigator) =>
            <View>
              <StatusBar hidden={route.statusBarHidden} />
              ...
            </View>
          }
          />
      </View>
    )
  }
};
module.exports = TopStatusBar;
