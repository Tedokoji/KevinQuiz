import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../Firebase/index'
import defaultpic from '../../../staticfiles/defaultpic.png'
import './Dash.scss'
import { signOut } from "firebase/auth";
function Dash() {
    const navi = useNavigate()
    const [nav,setNav] = useState(false)
    useEffect(()=>{
        console.log(auth.currentUser?.photoURL,auth.currentUser?.displayName);
        console.log(auth);
        if (auth.currentUser?.email === undefined){
            navi('/login')
        }
        
    })
  return (
   <>
   <div className="dashnav">
       <div className="profile-container">
            <img onClick={()=>{
            navi('/dashboard')

            }}
             alt="aaa" className="pro-avt" src={auth.currentUser?.photoURL == null?
            defaultpic : auth.currentUser?.photoURL }/>
       </div>
        <div className="profile-name" >{auth.currentUser?.displayName == null ?
            'Teacher Mode' : auth.currentUser?.displayName}
        </div>
            <svg className="expandnav" onClick={()=>{setNav(!nav)}}
            xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="48px" height="48px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
            </svg>       
   </div>
  { nav && <div className="navmenu" onMouseLeave={()=>{setNav(false)}}>
        <div className="nav-text" onClick={()=>{
            if(auth.currentUser?.displayName === "Trung Dũng Đặng Huỳnh"){
               navi('/createquiz')
            }
            
            setNav(false)
            
            }}>
            -CreateQuiz (only Teachers)
        </div>
        <div className="nav-text" onClick={()=>{
            navi('/dashboard')
        setNav(false)
        
        }}>
        -Back To DashBoard
    </div>
        <a  href="https://www.facebook.com/evergarden.violet.39501"
        className="nav-text" onClick={()=>{
             
            setNav(false)
            
            }}>
           
                -Report bugs, technical issues 
        </a>
        <div className="nav-text" onClick={()=>{
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
            setNav(false)
            
            }}>
            -Sign out
        </div>
   </div>
   }
   
   
   </>
  )
}

export default memo(Dash)
