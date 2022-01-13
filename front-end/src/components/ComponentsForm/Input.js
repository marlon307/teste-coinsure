import React from 'react';
import './Input.css'

function InputText({ type, id, name, placeholder, execFunction, autoComplete }) {
  return (
    <label htmlFor={ id } className="input">
      <input
        id={ id }
        name={ name }
        type={ type }
        placeholder={ placeholder }
        onChange={ execFunction }
        autoComplete={ autoComplete }
      />
    </label>
  )
}

export default InputText
