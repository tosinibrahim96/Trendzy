import { createSelector } from "reselect";

const selectCart = state => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const cartItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )
);
