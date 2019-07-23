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
          linkUrl: ''
        },
        {
          title: 'jackets',
          imageUrl: 'https://urlzs.com/Ck9hj',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://urlzs.com/9ni2w',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'women',
          imageUrl: 'https://urlzs.com/pTEVP',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://urlzs.com/SAZZh',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...Props }) => {
          return <MenuItem key={id} {...Props} />;
        })}
      </div>
    );
  }
}

export default Directory;
