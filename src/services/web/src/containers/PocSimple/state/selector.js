import { createSelector } from 'reselect';

export const selectReducer = (state) => state.list;
export const selectList = createSelector(
  selectReducer,
  (list) => list
);