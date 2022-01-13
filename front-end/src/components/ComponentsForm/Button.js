import React from 'react';
import './button.css';

function Button({ title }) {
  return (
    <button className="button" type="button">
      { title }
    </button>
  )
}

export default Button
