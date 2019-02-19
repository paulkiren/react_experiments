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
      <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
      <View style={{ width: 100, height: 100, backgroundColor: 'green' }}></View>
           <View style={{ width: 150, height: 150, backgroundColor: 'grey' }}>
        {/* <Text style={styles.bigBlue} >Big Red Kiren Paul Check</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={styles.red} >Kiren Paul Check</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text> */}
      </View>
    
      </View>

    );
  }
}