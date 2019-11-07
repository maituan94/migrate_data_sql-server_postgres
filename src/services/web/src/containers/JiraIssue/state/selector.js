import { createSelector } from 'reselect';
import Data from '../data.json';

const selectReducer = (state) => state.jiraIssue;
// export const selectList = (state) => selectReducer(state).get('list');
// export const selectSaveSuccessfully = (state) => selectReducer(state).get('saveSuccessfully');

export const selectList = createSelector(
  selectReducer,
  (list) => list
);

export const selectSaveSuccessfully = createSelector(
  selectReducer,
  (saveSuccessfully) => !saveSuccessfully
);