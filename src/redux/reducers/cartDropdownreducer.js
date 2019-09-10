import { actionTypes } from '../actions/actionTypes';

const { TOGGLE_CART_DROPDOWN } = actionTypes;
const INITIAL_STATE = {
  hideCartDropdown: true
};
export const cartDropdrownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hideCartDropdown: !state.hideCartDropdown
      };
    default:
      return state;
  }
};
