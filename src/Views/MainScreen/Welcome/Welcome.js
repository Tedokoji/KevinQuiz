import React from 'react'
import './Welcome.scss'
import kevinlogopng from '../../../staticfiles/kevinlol.png'
import kevinlogopngfull from '../../../staticfiles/fullkevin.jpg'
import Button from '../../../Assets/Buttons/Button'
import { useNavigate } from 'react-router-dom'
function Welcome() {
  const navi = useNavigate()
  const navigate = ()=>{
    navi('/login')
  }
  return (
        <>
    <div className='Welcome'>
        <div className='navbar-wrapper'>
          <img alt="bruh" src={kevinlogopng}/>
          <div className='buu'>
          <Button onClick={navigate} className='sb' text="Sign In"/>
          <Button onClick={navigate} className='sb reg' text="Or Register"/>
          </div>
        </div>
    </div>
        <img className='w' alt="bruh" src={kevinlogopngfull}/>
    </>
  )
}

export default Welcome