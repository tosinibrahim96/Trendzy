import { actionTypes } from './actionTypes';

const { TOGGLE_CART_DROPDOWN, ADD_ITEM_TO_CART } = actionTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItemToCart = newItem => ({
  type: ADD_ITEM_TO_CART,
  payload: newItem
});
