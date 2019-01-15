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

  },
  date: {

  },
  comment: {

  },
  likes: {

  }
})

export default Comment
