import React, {Component} from 'react';
import CommentsContainer from './src/components/CommentsContainer';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <>
        <Header title="upVote" />
        <CommentsContainer />
      </>
    );
  }
}
