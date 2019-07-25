import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option two" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
