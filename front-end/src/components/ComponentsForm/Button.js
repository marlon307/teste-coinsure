import React from 'react';
import './button.css';

function Button({ title, execFunction }) {
  return (
    <button
      className="button"
      type="button"
      onClick={ execFunction }
    >
      { title }
    </button>
  )
}

export default Button
