import React from "react";
import { Route } from "react-router-dom";
import ShopCategories from "../../components/ShopCategories/ShopCategories";
import shopCategory from "../shopCategory/shopCategory";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ShopCategories}></Route>
      <Route path={`${match.path}/:categoryId`} component={shopCategory} />
    </div>
  );
};

export default Shop;
