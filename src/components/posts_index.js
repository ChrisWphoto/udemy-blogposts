import React, {Component} from 'react';
import { fetchPosts } from '../actions/index'; 
import { connect } from 'react-redux';
import { Link } from 'react-router'



class Posts extends Component {
  
  
  componentWillMount() {
    console.log('action creator');
    fetchPosts();
  }
  
  
  render() {
    return (
      <div>
        Marmots
        <Link to="/posts/new" className="btn btn-primary">
          Add a new Posts
        </Link>
      </div>
    );
  }
}


export default connect(null, { fetchPosts } )(Posts);