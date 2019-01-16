import React, {Component} from 'react';
import CommentsContainer from './src/components/CommentsContainer';
import Header from './src/components/Header';
import { data } from './src/data';
import sortBy from 'lodash.sortby';

export default class App extends Component {
  render() {
    const sortedData = sortBy(data, 'likes').reverse()
    return (
      <>
        <Header title="upVote" />
        <CommentsContainer comments={sortedData}/>
      </>
    );
  }
}
