import React from 'react';
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
    </div>
  );
}

export default SectionItem;
