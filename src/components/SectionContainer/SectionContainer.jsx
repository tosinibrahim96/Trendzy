import React from 'react';
import SectionItem from '../SectionItem/SectionItem';
import './SectionContainer.scss';

function SectionContainer({ title, items }) {
  console.log('items', items);

  return (
    <div className="shop-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...Props }) => (
            <SectionItem key={id} {...Props} />
          ))}
      </div>
    </div>
  );
}

export default SectionContainer;
