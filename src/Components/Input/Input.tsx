import React from 'react'

import './Input.scss';

interface InputProps {
  id: string,
  value: string,
  label?: string,
  type?: string,
  name: string,
  handler(e: React.SyntheticEvent): void,
}

const Input = (props: InputProps) => {
  const {id, label, type = "text", name, value, handler} = props;
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => handler(e)}
      />
    </div>
  )
}

export default Input
