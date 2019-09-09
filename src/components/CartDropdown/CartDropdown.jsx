import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

import './CartDropDown.scss';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHACKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
