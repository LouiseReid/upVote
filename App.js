import React, {Component} from 'react';
import CommentsContainer from './src/components/CommentsContainer'
import { data } from './src/data';

export default class App extends Component {
  render() {
    return (
      <CommentsContainer comments={data}/>
    );
  }
}
