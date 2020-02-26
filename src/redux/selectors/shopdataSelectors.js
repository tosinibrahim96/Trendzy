import { createSelector } from "reselect";

const CATEGORY_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5
};

const shopData = state => {
  return state.shopData;
};

export const selectShopPageData = createSelector([shopData], shopData);

export const selectCategoryByUrl = categoryUrlParam => {
  return createSelector([selectShopPageData], shopData =>
    shopData.find(category => category.id === CATEGORY_ID_MAP[categoryUrlParam])
  );
};
