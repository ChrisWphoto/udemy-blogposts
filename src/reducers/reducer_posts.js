import { FETCH_POSTS } from '../actions/index';

const INIT_STATE = { all: [], post: null };

export default function(state = {}, action){
  switch(action.type) {
    case FETCH_POSTS:
      console.log('payload posts',action.payload.data);
      return { ...state, all: action.payload.data }
    default:
      console.log('default reducer case hit', action.paypload);
      return state;
  }
}