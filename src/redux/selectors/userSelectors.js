import { createSelector } from "reselect";

const selectUser = state => {
  return state.user;
};

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

// export const cartItemsCount = createSelector([selectCartItems], cartItems =>
//   cartItems.reduce(
//     (accumulator, cartItem) => accumulator + cartItem.quantity,
//     0
//   )
// );
