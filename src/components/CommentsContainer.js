import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Comment from './Comment'

const CommentsContainer = (props) => {

  return (
    <FlatList
      style={styles.listContainer}
      data={props.comments}
      renderItem={(item) => (
        <Comment
          comment={item}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  )
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 5
  }
})

export default CommentsContainer;
