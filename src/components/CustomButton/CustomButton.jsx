import React from 'react';
import './CustomButton.scss';

export default function CustomButton({
  children,
  isgoogle,
  isInverted,
  ...Props
}) {
  return (
    <button
      className={`${isInverted ? 'inverted' : ''} ${
        isgoogle ? 'google-button' : ''
      } custom-button`}
      {...Props}>
      {children}
    </button>
  );
}
