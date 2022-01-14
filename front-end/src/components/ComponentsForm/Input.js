import React from 'react';
import './Input.css'

function InputText({ type, id, name, placeholder, execFunction, autoComplete, value }) {
  return (
    <label htmlFor={ id } className="input">
      <input
        id={ id }
        name={ name }
        type={ type }
        value={ value }
        placeholder={ placeholder }
        onChange={ execFunction }
        autoComplete={ autoComplete }
      />
    </label>
  )
}

export default InputText
