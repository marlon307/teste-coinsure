import React from 'react';
import './InputText.css'

function InputText({ type, id, name }) {
  return (
    <label for={ id } className="input">
      <input id={ id } name={ name } type={ type } />
    </label>
  )
}

export default InputText
