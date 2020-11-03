import React from 'react'
import './BlueBtn.scss';

interface IProps {
  text: string
  disabled: boolean
}

const BlueBtn = (props: IProps) => {
  return (
    <button className="blue-btn" disabled={props.disabled}>{props.text}</button>
  )
}

export default BlueBtn
