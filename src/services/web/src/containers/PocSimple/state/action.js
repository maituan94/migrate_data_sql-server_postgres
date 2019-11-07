export const GET_LIST_DATA_REQUEST = 'GET_LIST_DATA_REQUEST';
export const GET_LIST_DATA_SUCCESS = 'GET_LIST_DATA_SUCCESS';
export const GET_LIST_DATA_ERROR = 'GET_LIST_DATA_ERROR';

export const getListData = () => ({
  type: GET_LIST_DATA_REQUEST
});

export const getSuccess = (payload) => ({
  type: GET_LIST_DATA_SUCCESS,
  payload:payload,
});

export const getError = (payload) => ({
  type: GET_LIST_DATA_ERROR,
  payload,
});
export default {};

