import { actionTypes } from './actionTypes';

const { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART,REMOVE_ITEM_FROM_CART } = actionTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItemToCart = newItem => ({
  type: ADD_ITEM_TO_CART,
  payload: newItem
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item
});
