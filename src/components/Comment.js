import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import CustomText from '../custom_components/CustomText';

const Comment = ({comment}) => (

    <View style={styles.listItem}>
      <CustomText style={styles.userName}>{comment.item.user_name}</CustomText>
      <CustomText style={styles.date}>{comment.item.date}</CustomText>
      <CustomText style={styles.comment}>{comment.item.comment}</CustomText>
      <CustomText style={styles.likes}>{comment.item.likes}</CustomText>
    </View>
)

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee',
  },
  userName: {
    color:  '#2b4c6b',
    fontWeight: 'bold'
  },
  date: {
    position: 'absolute',
    right: 4,
    top: 4
  },
  comment: {
    paddingTop: 5,
    paddingBottom: 5
  },
  likes: {
    alignSelf: 'flex-end',
    color:  '#2b4c6b',
    fontWeight: 'bold'
  }
})

export default Comment
