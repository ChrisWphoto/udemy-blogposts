import React, {Component} from 'react';
import { fetchPosts } from '../actions/index'; 
import { connect } from 'react-redux';
import { Link } from 'react-router'



class Posts extends Component {
  
  
  componentWillMount() {
    console.log('action creator');
    fetchPosts();
  }
  
  renderPosts() {
    // return this.props.posts.map( (post) =>{
    //   return (
    //     <li className="list-group-item" key={post.id}>
    //       <span className="pull-xs-right"> 
    //         {post.categories}
    //       </span> 
    //     </li>
    //   )
    // })
  }
  
  
  render() {
    return (
      <div>
        Marmots
        <Link to="/posts/new" className="btn btn-primary">
          Add a new Posts
        </Link>
        <h3> Posts </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return { posts: state.posts.all };
}


export default connect(mapStateToProps, { fetchPosts } )(Posts);