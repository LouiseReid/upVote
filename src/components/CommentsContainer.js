import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, LayoutAnimation, UIManager } from 'react-native';
import Comment from './Comment';
import { data } from '../data';
import sortBy from 'lodash.sortby';


class CommentsContainer extends React.Component {

  state = {
    comments: [],
    refresh: true
  }

  forceRender = () => {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);


    this.setState( prevState =>{
      return {
        comments: sortBy(prevState.comments, 'likes').reverse(),
        refresh: !this.state.refresh
      }
    })
  }

  componentDidMount(){
    const sortedData = sortBy(data, 'likes').reverse()
    this.setState({
      comments: sortedData
    })
  }


  render(){
  return (
    <FlatList
      style={styles.listContainer}
      data={this.state.comments}
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
