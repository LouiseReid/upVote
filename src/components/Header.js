import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Header = ({title}) => (

  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>

)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121'
  },
  text: {
    textAlign: 'center',
    color: '#eee',
    fontSize: 30,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'monospace',
    letterSpacing: 2,
    paddingTop: Platform.OS === 'ios' ? 35 : 10,
    paddingBottom: 10
  }
})

export default Header
