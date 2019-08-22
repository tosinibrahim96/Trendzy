import React from 'react';
import './FormInput.scss';

export default function FormInput({ handleChange, label, ...Props }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...Props} />
      {label ? (
        <label
          className={`${Props.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
