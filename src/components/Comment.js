import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comment = ({comment}) => (

    <View style={styles.listItem}>
      <Text>{comment.item.user_name}</Text>
      <Text>{comment.item.date}</Text>
      <Text>{comment.item.comment}</Text>
      <Text>{comment.item.likes}</Text>
    </View>
)

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
})

export default Comment
