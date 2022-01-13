import React from 'react';
import './InputText.css'

function InputText({ type, id, name, placeholder, execFunction }) {
  return (
    <label htmlFor={ id } className="input">
      <input
        id={ id }
        name={ name }
        type={ type }
        placeholder={ placeholder }
        onChange={ execFunction }
      />
    </label>
  )
}

export default InputText
