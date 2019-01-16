import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, LayoutAnimation } from 'react-native';
import Comment from './Comment'

class CommentsContainer extends React.Component {

  state = {
    refresh: true
  }

  forceRender = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      refresh: !this.state.refresh
    })
  }

  render(){
  return (
    <FlatList
      style={styles.listContainer}
      data={this.props.comments}
      extraData={this.state.refresh}
      renderItem={(item) => (
        <Comment
          comment={item}
          refresh={this.forceRender}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  )
};

}
const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 5
  }
})

export default CommentsContainer;
