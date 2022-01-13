import React from 'react';
import './InputText.css'

function InputText({ type, id, name, placeholder, }) {
  return (
    <label htmlFor={ id } className="input">
      <input
        id={ id }
        name={ name }
        type={ type }
        placeholder={ placeholder }
      />
    </label>
  )
}

export default InputText
