import React from 'react';
import './CustomButton.scss';

export default function CustomButton({ children, isgoogle, ...Props }) {
  return (
    <button
      className={`${isgoogle ? 'google-button' : ''} custom-button`}
      {...Props}>
      {children}
    </button>
  );
}
