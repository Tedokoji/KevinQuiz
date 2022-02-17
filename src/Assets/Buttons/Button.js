import React from 'react'
import './Button.scss'
function Button(props) {
  return (
    <div className={`default-button ${props.className}`} onClick={props.onClick}>
      {props.text}
    </div>
  )
}

export default Button