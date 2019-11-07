import { put, takeLatest } from 'redux-saga/effects';
import { getList } from '../Apis/api'
import {
  GET_LIST_DATA_REQUEST,
  getSuccess,
  getError
} from './action';

export function* getPoc() {

  try {
    const response = yield getList('http://www.mocky.io/v2/5dc287562f00000e004be0db');

    if (response.status === 200) {
      // const successResponse = yield call([response, response.data]);
      yield put(getSuccess(response.data));
      return;
    }
  } catch (error) {
    yield put(getError(error));
  }
}

export default function* pocSaga() {
  yield takeLatest(GET_LIST_DATA_REQUEST, getPoc);
}