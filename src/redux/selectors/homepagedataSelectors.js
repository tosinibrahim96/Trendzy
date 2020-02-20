import { createSelector } from "reselect";

const homepageData = state => {
  return state.homepageData;
};

export const selectHomepageData = createSelector([homepageData], homepageData);
