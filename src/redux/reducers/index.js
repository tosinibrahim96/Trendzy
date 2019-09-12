import { combineReducers } from 'redux';
import { setCurrentUserReducer } from './userReducer';
import { cartReducer } from './cartReducer';

export default combineReducers({
  user: setCurrentUserReducer,
  cart: cartReducer
});
