import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, AppRegistry } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40
  },
  red: {
    color: 'red'
  }
});
export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.bigBlue} >Big Red Kiren Paul Check</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={styles.red} >Kiren Paul Check</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
  }
}