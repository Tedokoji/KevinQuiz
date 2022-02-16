import React from 'react'
import './Button.scss'
function LoginButton(props) {
  return (
    <div className="GGlogin" onClick={props.onClick}>
          <img alt="ggicon" src={props.src}/> 
          <h2 className="GGtext">{props.text}</h2>
    </div>
  )
}

export default LoginButton