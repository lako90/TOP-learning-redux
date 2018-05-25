import { combineReducers } from 'redux';

import todoReducer from './modules/Todo/reducer';
import userReducer from './modules/User/reducer';

export default combineReducers({
  todo: todoReducer,
  user: userReducer,
});
