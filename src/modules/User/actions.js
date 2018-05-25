import axios from 'axios';
import { GET_REQUEST, GET_SUCCESS, GET_ERROR } from './constants';

const getRequest = () => ({ type: GET_REQUEST });
const getSuccess = users => ({
  type: GET_SUCCESS,
  users,
});
const getError = error => ({
  type: GET_ERROR,
  error,
});

const getUsers = () => (dispatch) => {
  dispatch(getRequest());

  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  }).then(({ data }) => {
    dispatch(getSuccess(data));
  }).catch(() => {
    dispatch(getError());
  });
};

export default getUsers;
