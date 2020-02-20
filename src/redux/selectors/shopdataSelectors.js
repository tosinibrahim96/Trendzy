import { createSelector } from "reselect";

const shopData = state => {
  return state.shopData;
};

export const selectShopPageData = createSelector([shopData], shopData);
