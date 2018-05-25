import {
  GET_REQUEST,
  GET_SUCCESS,
  GET_ERROR,

  ADD_TODO,
  REMOVE_TODO,
} from './constants';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const todoReducer = (state = initialState, {
  type,
  todos,
  id,
  text,
}) => {
  switch (type) {
    case GET_REQUEST:
      return {
        loading: true,
        error: false,
        data: [],
      };

    case GET_SUCCESS:
      return {
        loading: false,
        error: false,
        data: todos,
      };

    case GET_ERROR:
      return {
        loading: false,
        error: true,
        data: state.data,
      };

    case ADD_TODO:
      return {
        loading: false,
        error: false,
        data: [
          ...state.data,
          {
            id,
            title: text,
          },
        ],
      };

    case REMOVE_TODO:
      return {
        loading: false,
        error: false,
        data: [
          ...state.data.filter(item => item.id !== id),
        ],
      };

    default:
      return state;
  }
};

export default todoReducer;
