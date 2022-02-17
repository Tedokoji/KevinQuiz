import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../Firebase/index'
import Menu from '../../Menu/Menu'
function Dash() {
    const navi = useNavigate()
    useLayoutEffect(()=>{
        if (auth.currentUser === undefined){
            navi('/')
        }
        console.log(auth);
    })
  return (
   <>
   
   </>
  )
}

export default Dash