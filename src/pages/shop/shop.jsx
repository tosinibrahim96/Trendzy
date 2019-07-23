import React, { Component } from 'react';
import SectionContainer from '../../components/SectionContainer/SectionContainer';
import SHOP_DATA from './shop.data';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...Props }) => (
          <SectionContainer key={id} {...Props} />
        ))}
      </div>
    );
  }
}
