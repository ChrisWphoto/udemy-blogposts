import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=gdsafsgafefwesfasdaubkv';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log('fetching posts')
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  console.log('sending form post', props);
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
  
  return {
    type: CREATE_POST,
    payload: () => {
      console.log('request', request);
      return request;
    }
  }
}