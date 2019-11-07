import { put, takeLatest, takeLeading } from 'redux-saga/effects';
import Data from '../data';

import {
  GET_LIST_DATA_REQUEST,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_ERROR,
  CREATE_JIRA_ISSUE_REQUEST,
  CREATE_JIRA_ISSUE_SUCCESS,
  CREATE_JIRA_ISSUE_ERROR,
} from './action';

export function* getJiraIssues() {
  try {
    const data = Data;
    yield put({ type: GET_LIST_DATA_SUCCESS, payload: data.data.getJiraIssues });
  } catch (error) {
    yield put({ type: GET_LIST_DATA_ERROR, error: error.toString() });
  }
}

export function* createJiraIssueSaga(action) {
  try {
    const data = Data;
    yield put({ type: CREATE_JIRA_ISSUE_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: CREATE_JIRA_ISSUE_ERROR, error: error.toString() });
  }
}

export default function* jiraIssueSaga() {
  yield takeLatest(GET_LIST_DATA_REQUEST, getJiraIssues);
  yield takeLeading(CREATE_JIRA_ISSUE_REQUEST, createJiraIssueSaga);
}
