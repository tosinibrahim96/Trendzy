import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cartActions';
import './SectionItem.scss';

function SectionItem({ item, addItemToCart }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="section-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="section-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton isInverted onClick={() => addItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
}

const setDispatchFunctionAsProps = dispatch => ({
  addItemToCart: newItem => dispatch(addItemToCart(newItem))
});

export default connect(
  null,
  setDispatchFunctionAsProps
)(SectionItem);
