import immutable from 'immutable';

import {
  GET_LIST_DATA_REQUEST,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_ERROR,
  CREATE_JIRA_ISSUE_REQUEST,
  CREATE_JIRA_ISSUE_SUCCESS,
  CREATE_JIRA_ISSUE_ERROR,
  RESET_CREATE,
} from './action';

import Data from '../data.json'

const init = () => {
  const initValue = immutable.fromJS({
    list: undefined,
    saveSuccessfully: false,
  });
  return initValue.set('list', []);
};


export default function (state = init(), action) {
  switch (action.type) {
    case GET_LIST_DATA_REQUEST:
      //Add Data
      console.log("GET_LIST_DATA_REQUEST: ", action.payload);
      
      return state.set('list', action.payload);      
    case GET_LIST_DATA_SUCCESS:
      return state.set('list', action.payload);
    case GET_LIST_DATA_ERROR:
      return state.set('list', []);
    case CREATE_JIRA_ISSUE_REQUEST:
      return state.set('saveSuccessfully', false);
    case CREATE_JIRA_ISSUE_SUCCESS:
      return state.set('saveSuccessfully', true);
    case CREATE_JIRA_ISSUE_ERROR:
      return state.set('saveSuccessfully', false);
    case RESET_CREATE:
      return state.set('saveSuccessfully', false);
    default: return state;
  }
}
