import { all } from 'redux-saga/effects';

/** * sagas */
// import JiraIssueSaga from '../containers/JiraIssue/state/saga';
import PocSaga from '../containers/PocSimple/state/saga'
export default function* rootSaga() {
  yield all([
    PocSaga(),
  ]);
} 
