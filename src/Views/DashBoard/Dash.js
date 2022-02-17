import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../Firebase/index'
function Dash() {
    const navi = useNavigate()
    useLayoutEffect(()=>{
        if (auth.currentUser == undefined){
            navi('/')
        }
    })
  return (
   <div>
     
   </div>
  )
}

export default Dash