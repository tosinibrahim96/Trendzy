import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHomepageData } from "../../redux/selectors/homepagedataSelectors";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

export const Directory = ({homepageData}) => {
  return (
    <div className="directory-menu">
      {homepageData.map(({ id, ...Props }) => {
        return <MenuItem key={id} {...Props} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  homepageData: selectHomepageData
});

export default connect(mapStateToProps)(Directory);
