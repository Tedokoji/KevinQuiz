import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../Firebase/index'
function Dash() {
    const navi = useNavigate()
    useEffect(()=>{
        if (auth.currentUser == undefined){
            navi('/')
        }
    })
  return (
    <>

    </>
  )
}

export default Dash