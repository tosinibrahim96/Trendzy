import React from "react";
import { connect } from "react-redux";
import { selectShopPageData } from "../../redux/selectors/shopdataSelectors";
import { createStructuredSelector } from "reselect";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

const ShopCategories = ({ shopData }) => {
  return (
    <div className="categories-overview">
      {shopData.map(({ id, ...Props }) => (
        <SectionContainer key={id} {...Props} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopData: selectShopPageData
});

export default connect(mapStateToProps)(ShopCategories);
