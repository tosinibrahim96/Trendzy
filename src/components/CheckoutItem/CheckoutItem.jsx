import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  reduceCartItem,
  addItemToCart
} from "../../redux/actions/cartActions";
import "./CheckoutItem.scss";

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  reduceCartItem,
  addItemToCart
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceCartItem(cartItem)}>
         <button className="add_or_reduce">-</button>
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
        <button className="add_or_reduce">+</button>
        </div>
      </span>
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
  removeItemFromCart: cartItem => dispatch(removeItemFromCart(cartItem)),
  addItemToCart: cartItem => dispatch(addItemToCart(cartItem)),
  reduceCartItem: cartItem => dispatch(reduceCartItem(cartItem))
});

export default connect(null, setDispatchFunctionsAsProps)(CheckoutItem);
