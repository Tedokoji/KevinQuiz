import React, { useState,useLayoutEffect,useEffect } from 'react'
import './Content.scss'

import Thumbnail from '../../../Assets/QuizAssets/Thumbnail';
import Grade from '../Quiz/Grade';
import { database } from '../../../Firebase/index';
import { ref, child, get } from "firebase/database";
import { createContext } from "react";
const QuizContext = createContext()
function Content(props) {
 
  const [activegrade,setActivegrade] = useState(6)
  
  const [Quizdata,setQuizdata] = useState([])
  
  const [load,setLoad] = useState(false)
  useLayoutEffect(()=>{
    const getDataQuiz=async()=>{
      get(child(ref(database), `Grade/${activegrade}`)).then((snapshot) => {
        if (snapshot.exists()) {
         Object.entries(snapshot.val()).forEach(datacrap=>{
           
          datacrap[1].forEach((title,index)=>{
           
          setQuizdata( Object.entries(title).map(DATASHIT =>{
            return DATASHIT
            
           }))
          
          })})
          
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    
    getDataQuiz()
    
  },[activegrade])
  useEffect(()=>{
    
  setTimeout(()=>{
   
    setLoad(true)
    
  },1000)
},[])
  return (
    <QuizContext.Provider value={Quizdata}>

   {load && <div className="content">
      <Grade title="Grade 6" className={activegrade === 6 ? "active-grade":""}
      onClick={()=>{setActivegrade(6)}}>
      
        { activegrade === 6 ? <>

      {
        Quizdata.map(e=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category="Unit 10" 
            tags={e[1].tags}
        onClick={()=>{console.log("hello!");}}/>
          )
        })

      }
        </>:<></>}
      </Grade>
      <Grade title="Grade 7" className={activegrade === 7 ? "active-grade":""}
      onClick={()=>{setActivegrade(7)}}>
      
        { activegrade === 7 ? <>

      {
        Quizdata.map(e=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category="Unit 10" 
            tags={e[1].tags}
        onClick={()=>{console.log("hello!");}}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 8" className={activegrade === 8 ? "active-grade":""}
      onClick={()=>{setActivegrade(8)}}>
      
        { activegrade === 8 ? <>

      {
        Quizdata.map(e=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category="Unit 10" 
            tags={e[1].tags}
        onClick={()=>{console.log("hello!");}}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 9" className={activegrade === 9 ? "active-grade":""}
      onClick={()=>{setActivegrade(9)}}>
      
        { activegrade === 9 ? <>

      {
        Quizdata.map(e=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category="Unit 10" 
            tags={e[1].tags}
        onClick={()=>{console.log("hello!");}}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 10" className={activegrade === 10 ? "active-grade":""}
      onClick={()=>{setActivegrade(10)}}>
      
        { activegrade === 10 ? <>

      {
        Quizdata.map(e=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category="Unit 10" 
            tags={e[1].tags}
        onClick={()=>{console.log("hello!");}}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 11" className={activegrade === 11 ? "active-grade":""}
      onClick={()=>{setActivegrade(11)}}>
      
        { activegrade === 11 ? <>

      {
        Quizdata.map(e=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category="Unit 10" 
            tags={e[1].tags}
        onClick={()=>{console.log("hello!");}}/>
          )
        })

      }
        </>:<></>}
      </Grade> 
      <Grade title="Grade 12" className={activegrade === 12 ? "active-grade":""}
      onClick={()=>{setActivegrade(12)}}>
      
        { activegrade === 12 ? <>

      {
        Quizdata.map(e=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category="Unit 10" 
            tags={e[1].tags}
        onClick={()=>{console.log("hello!");}}/>
          )
        })

      }
        </>:<></>}
      </Grade> 
   </div>}
   </QuizContext.Provider>

  )
}

export default Content