import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import CustomText from '../custom_components/CustomText';

const Header = ({title}) => (

  <View style={styles.container}>
    <CustomText style={styles.text}>{title}</CustomText>
  </View>

)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121'
  },
  text: {
    textAlign: 'center',
    color: '#eee',
    fontSize: 35,
    letterSpacing: 2,
    paddingTop: Platform.OS === 'ios' ? 35 : 10,
    paddingBottom: 10
  }
})

export default Header
