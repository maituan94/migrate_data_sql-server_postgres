import { reducer } from 'redux-oidc';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from 'redux';

/** * reducers */
// import JiraIssueReducer from '../containers/JiraIssue/state/reducer';
import PocReducer from '../containers/PocSimple//state/reducer' ;


const rootReducer = combineReducers({
  auth: reducer,
  loadingBar: loadingBarReducer,
  // jiraIssue: JiraIssueReducer,
  list: PocReducer
});

export default rootReducer;
