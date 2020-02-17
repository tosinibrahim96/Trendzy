import { actionTypes } from '../actions/actionTypes';
import { addNewItemToCart,removeItemFromCart,reduceOrRemoveItem } from '../utils/cart.utils';

const { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART,REMOVE_ITEM_FROM_CART,REDUCE_ITEM } = actionTypes;
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
        cartItems: addNewItemToCart(state.cartItems, action.payload)
      };
      case REMOVE_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
      case REDUCE_ITEM:
      return {
        ...state,
        cartItems: reduceOrRemoveItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
