import React from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/actions/cartActions";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem, removeItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const setDispatchFunctionsAsProps = dispatch => ({
  removeItemFromCart: cartItem => dispatch(removeItemFromCart(cartItem))
});

export default connect(null, setDispatchFunctionsAsProps)(CheckoutItem);
