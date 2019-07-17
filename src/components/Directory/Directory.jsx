import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://urlzs.com/VpbQ7',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://urlzs.com/Ck9hj',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://urlzs.com/9ni2w',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'women',
          imageUrl: 'https://urlzs.com/pTEVP',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://urlzs.com/SAZZh',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => {
          return (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
