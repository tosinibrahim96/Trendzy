import { combineReducers } from 'redux';
import { setCurrentUserReducer } from './userReducer';
import { cartDropdrownReducer } from './cartDropdownreducer';

export default combineReducers({
  user: setCurrentUserReducer,
  cartDropdown: cartDropdrownReducer
});
