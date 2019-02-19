import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };
    setInterval(() => {
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }))
    }, 1000);
  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (<Text>{this.props.text}</Text>);
  }
}
export default class BlinkApp extends Component {

  render() {
    return (
      <View>
        <Blink text="I Love U" />
      </View>
    );
  }
}