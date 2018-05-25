import axios from 'axios';
import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,

  ADD_TODO,
  REMOVE_TODO,
} from './constants';

const getRequest = () => ({ type: GET_REQUEST });
const getSuccess = todos => ({
  type: GET_SUCCESS,
  todos,
});
const getError = error => ({
  type: GET_ERROR,
  error,
});

const getTodo = () => (dispatch) => {
  dispatch(getRequest());

  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
  }).then(({ data: todos }) => {
    dispatch(getSuccess(todos));
  }).catch(() => {
    dispatch(getError());
  });
};

export const addTodo = text => ({
  type: ADD_TODO,
  id: parseInt(Math.random() * 99999, 10),
  text,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

export default getTodo;
