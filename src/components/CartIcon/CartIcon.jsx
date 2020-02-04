import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/actions/cartActions";
import { cartItemsCount } from "../../redux/selectors/cartSelectors";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const setDispatchFunctionsAsProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemsCount
});

export default connect(mapStateToProps, setDispatchFunctionsAsProps)(CartIcon);
