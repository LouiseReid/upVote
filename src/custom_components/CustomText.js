import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const CustomText = (props) => (

  <Text {...props} style={[styles.font, props.style]}>{props.children}</Text>

)

const styles = StyleSheet.create({
  font: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'monospace',
  }
})

export default CustomText
