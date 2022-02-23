import React from 'react'
import './Thumbnail.scss'
function Thumbnail(props) {
  return (
    <div className="thumbnail-wrapper">
        <div className="thumbnail-content">
          <div className="thumbnail-title">{props.title}</div>
          <div className="thumbnail-category">Category:{props.category}</div>
          <div className="thumbnail-Tags">Tags:{props.tags}</div>

          <div className="thumbnail-AccessQuiz" onClick={props.onClick}>
            <div className="thumbnail-AccessQuiz-lefttoplay">
              Starts the Test:
            </div>
            <img alt="playbtn" className="thumbnail-AccessQuiz-play" 
             src="https://img.icons8.com/bubbles/50/000000/play.png"/>
          </div>
        </div>
    </div>
  )
}

export default Thumbnail