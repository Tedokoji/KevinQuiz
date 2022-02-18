import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../Firebase/index'
import defaultpic from '../../../staticfiles/defaultpic.png'
import home from '../../../staticfiles/home.png'
import Content from './Content'
import './Dash.scss'
function Dash() {
    const navi = useNavigate()
    useLayoutEffect(()=>{
        if (auth.currentUser === undefined){
            navi('/')
        }
        console.log(auth.currentUser?.photoURL,auth.currentUser?.displayName);
    })
  return (
   <>
   <div className="dashnav">
       <div className="profile-container">
            <img alt="aaa" className="pro-avt" src={auth.currentUser?.photoURL == null?
            defaultpic : auth.currentUser?.photoURL }/>
       </div>
            <div className="profile-name">{auth.currentUser?.displayName ==null ?
            'Teacher Mode' : auth.currentUser?.displayName}</div>

   </div>
   <Content/>
   <div className="tabbar">
    <div className="tabicons">
        <img alt="aaa" className="tabicon" src={home}/>
    </div>
    <div className="tabicons">

    </div>
    <div className="tabicons">

    </div>
   </div>
   </>
  )
}

export default Dash