import React from "react";
import { connect } from "react-redux";
import { selectCategoryByUrl } from "../../redux/selectors/shopdataSelectors";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

import "./shopCategory.scss";

const shopCategory = ({ category }) => {
  console.log({ category });
  return (
    <div className="category">
      <h2>category page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  //we're doing this instead of createstructuredselector because we need
  // data from the props of the current component
  category: selectCategoryByUrl(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(shopCategory);
