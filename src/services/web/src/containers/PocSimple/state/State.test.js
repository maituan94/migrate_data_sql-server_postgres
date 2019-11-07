import {
  GET_LIST_DATA_REQUEST,
  GET_LIST_DATA_SUCCESS,
  GET_LIST_DATA_ERROR,
  
} from './action.js';
import pocReducer from './reducer';
import Data from '../data';

describe('PocSimple Reducer', () => {
  it('Should return default state', () => {
    const list = {
      list: []
    }
    const newState = pocReducer(undefined, {});
    expect(newState).toEqual(list);
    console.log('HN-----');

  });

  it('Should return new state if receiving type', () => {
    const data = Data;
    const newState = pocReducer(undefined, {
      type: GET_LIST_DATA_SUCCESS,
      payload: data
    });
    expect(newState.list).toEqual(Data);
    console.log('HN-----Success');

  })
  it('Should return error if receiving error', () => {
    const data = Data;
    const list = {
      list: []
    }
    const newState = pocReducer(undefined, {
      type: GET_LIST_DATA_ERROR,
      payload: data
    });
    expect(newState).toEqual(list);
    console.log('HN-----Error');
    
  })

});