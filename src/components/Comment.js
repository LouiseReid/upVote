import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import CustomText from '../custom_components/CustomText';
import Icon from 'react-native-vector-icons/Ionicons'

const Comment = ({comment}) => (

    <View style={styles.listItem}>
      <CustomText style={styles.userName}>{comment.item.user_name}</CustomText>
      <CustomText style={styles.date}>{comment.item.date}</CustomText>
      <CustomText style={styles.comment}>{comment.item.comment}</CustomText>
      <View style={styles.likesContainer}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-thumbs-up' : 'md-thumbs-up'}
          size={15}
          style={styles.thumbIcon}
        />
        <Icon
          name={Platform.OS === 'ios' ? 'ios-thumbs-down' : 'md-thumbs-down'}
          size={15}
          style={styles.thumbIcon}
        />
        <CustomText style={styles.likes}>{comment.item.likes}</CustomText>
      </View>
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
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  likes: {
    alignSelf: 'flex-end',
    color:  '#2b4c6b',
    fontWeight: 'bold',
    marginLeft: 15
  },
  thumbIcon: {
    marginLeft: 15,
    color:  '#2b4c6b'
  }
})

export default Comment
