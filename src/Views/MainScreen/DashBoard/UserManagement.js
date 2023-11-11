
import React, { memo, useEffect, useState,useLayoutEffect } from 'react'
import { database } from '../../../Firebase/index';
import { ref, child, get,remove } from "firebase/database";
import './Dash.scss'
import { getAuth, createUserWithEmailAndPassword, isSignInWithEmailLink } from "firebase/auth";
function UserManagement(){

   useLayoutEffect(()=>{
    
    const getDataQuiz=async()=>{
        setTimeout(()=>{
          
          
        },1000)
        get(child(ref(database), `User`)).then((snapshot) => {
          if (snapshot.exists()) {
           Object.entries(snapshot.val()).forEach(datacrap=>{
             
            console.log(datacrap)
            })
            
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      }
      
      getDataQuiz()
    
   })
    return (
        <div>
          
        </div>
    );
}
export default UserManagement