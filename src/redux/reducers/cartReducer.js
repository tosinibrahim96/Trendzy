import { actionTypes } from '../actions/actionTypes';

const { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART } = actionTypes;
const INITIAL_STATE = {
  hideCartDropdown: true,
  cartItems: []
};
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hideCartDropdown: !state.hideCartDropdown
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};
