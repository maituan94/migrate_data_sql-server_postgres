import {
  GET_LIST_DATA_REQUEST,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_ERROR,
  
} from './action.js';

const init = {
  list: [],
};

export default function reducer(state = init, action) {
  switch (action.type) {
    case GET_LIST_DATA_REQUEST:
      return {...state};
    case GET_LIST_DATA_SUCCESS:
      return {...state, list: action.payload};
    case GET_LIST_DATA_ERROR:
      return state;
    default:
      return state
  }
}