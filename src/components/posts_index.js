import React, {Component} from 'react';
import { fetchPosts } from '../actions/index'; 
import { connect } from 'react-redux';



class Posts extends Component {
  
  
  componentWillMount() {
    console.log('action creator');
    fetchPosts();
  }
  
  
  render() {
    return (
      <div>
        Marmots
      </div>
    );
  }
}


export default connect(null, { fetchPosts } )(Posts);