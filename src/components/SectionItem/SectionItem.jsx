import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './SectionItem.scss';

function SectionItem({ price, imageUrl, name }) {
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
      <CustomButton isInverted>Add to cart</CustomButton>
    </div>
  );
}

export default SectionItem;
