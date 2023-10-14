import React, { memo, useEffect, useState,useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../Firebase/index'
import defaultpic from '../../../staticfiles/defaultpic.png'
import './Dash.scss'
import { signOut } from "firebase/auth";
import { database } from '../../../Firebase/index';
import { ref, child, get,remove } from "firebase/database";
import {connect} from "react-redux";
import { quizData } from './../../../Redux/Action';

function Dash(props) {
    const navi = useNavigate()
    const [search,setSearch] = useState("")
    const [nav,setNav] = useState(false)
    const unit1den15 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const [toggleunit,setToggleunit] = useState(false)
  const [activegrade,setActivegrade] = useState(6)
  
  const [Quizdata,setQuizdata] = useState([[]])
  const [currentUnit,setCurrentUnit] = useState(1)
  const [load,setLoad] = useState(false)


  const [tempGrade,setTempGrade] = useState()
  const [tempUnit,setTempUnit] = useState()
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
        <div className='SearchBar' onClick={()=>{

        }}>
           
            <input 
           onChange={(e)=>{setSearch(e.target.value)}}
          className=''/><span className='SearchBtn'
          
          onClick={()=>{
            if(search == "") return;
                console.log("this is search in action")
                const SearchforHomework=async()=>{
                   
                    get(ref(database)).then((snapshot) => {
                      if (snapshot.exists()) {
                       Object.entries(snapshot.val()).forEach(datacrap=>{
                         console.log(datacrap);
                        datacrap.forEach(Grade =>{
                            console.log(Grade)
                            Object.entries(Grade)?.forEach(e=>{
                                if(e[0] >= 6) {
                                    console.log(e)
                                    e.forEach(graderesult =>{
                                        console.log("Grade result")
                                        console.log(graderesult)
                                        Object.entries(graderesult).forEach(e =>{
                                            console.log("Unit?")
                                            console.log(e)
                                        })
                                    })
                                    setTempGrade(e[0])
                                    
                                }
                            })
                        })
                        
                            
                            // if (search.toLowerCase() == DATASHIT[0]?.toLowerCase()){
                            //     console.log("Success correcting names")
                                
                                
                            // }
                            
                           })

                        
                      } else {
                        console.log("No data available");
                      }
                    }).catch((error) => {
                      console.error(error);
                    });
                  }
                  SearchforHomework()

          }}    
          >Search: </span> 
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

navi('/createTeacherOrStudents')  
}}>
-CreateRoles-adminonly
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


const mapStateToProps = (state)=>{
    return{
      quizDatadata: state.quizData
    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return{
      quizData: (e)=>{dispatch(quizData(e))}
    }
  }
  export default (connect(mapStateToProps, mapDispatchToProps)(Dash))