import React from 'react'
import './Grade.scss'
function Grade(props) {
  return (
    <div className="grade-wrapper ">
        <p className={`grade-title ${props.className}`}
         onClick={props.onClick}>{props.title}</p>
         
        <div className="grade">
            
            {props.children}
        </div>
    </div>
  )
}

export default Grade