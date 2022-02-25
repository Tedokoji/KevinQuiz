import React, { useState,useLayoutEffect,useEffect } from 'react'
import './Content.scss'

import Thumbnail from '../../../Assets/QuizAssets/Thumbnail';
import Grade from '../Quiz/Grade';
import { database } from '../../../Firebase/index';
import { ref, child, get } from "firebase/database";
import {connect} from "react-redux";
import { quizData } from './../../../Redux/Action';
import { useNavigate } from 'react-router-dom';
function Content(props) {
  const unit1den15 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  const [toggleunit,setToggleunit] = useState(false)
  const [activegrade,setActivegrade] = useState(6)
  
  const [Quizdata,setQuizdata] = useState([[]])
  const [currentUnit,setCurrentUnit] = useState(1)
  const [load,setLoad] = useState(false)
  const navi = useNavigate()
  useLayoutEffect(()=>{
    const getDataQuiz=async()=>{
      get(child(ref(database), `Grade/${activegrade}`)).then((snapshot) => {
        if (snapshot.exists()) {
         Object.entries(snapshot.val()).forEach(datacrap=>{
           console.log(datacrap);
          datacrap[1].forEach((title,index)=>{
            console.log(index);
            console.log(title);
           if(index === currentUnit) {
            setQuizdata( Object.entries(title).map(DATASHIT =>{
            
              return DATASHIT
              
             }))
            
           };
          
          
          })})
          
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    
    getDataQuiz()
    props.quizData(Quizdata)
  },[activegrade,currentUnit])
  useEffect(()=>{
  setTimeout(()=>{
   
    setLoad(true)
    
  },1000)
},[])
  return (
    <>
      {load && <><div className="content">
      <div className="theunit" onClick={()=>{setToggleunit(!toggleunit)}}>Unit: {currentUnit}
      { toggleunit &&
        unit1den15.map(e=>{
          return(
            <div key={e} onClick={()=>{setCurrentUnit(e)}}
            className={`subunits ${e===currentUnit ? "activeunit" : ""}`}>{e}</div>
          )
        })
      }
      </div>
   
      <Grade title="Grade 6" className={activegrade === 6 ? "active-grade":""}
      onClick={()=>{setActivegrade(6)}}>
      
        { activegrade === 6 ? <>

      {
        Quizdata.map((e,index)=>{
          console.log(Quizdata[index]);
          return(
            <Thumbnail key={e[0]} title={e[0]} category={"Multiple-choice"} 
            tags={e[1].tags}
        onClick={()=>{props.quizData(Quizdata[index])
            navi('/test')
        }}/>
          )
        })

      }
        </>:<></>}
      </Grade>
      <Grade title="Grade 7" className={activegrade === 7 ? "active-grade":""}
      onClick={()=>{setActivegrade(7)}}>
      
        { activegrade === 7 ? <>

      {
        Quizdata.map((e,index)=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category={"Multiple-choice"} 
            tags={e[1].tags}
        onClick={()=>{props.quizData(Quizdata[index])
            navi('/test')
        }}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 8" className={activegrade === 8 ? "active-grade":""}
      onClick={()=>{setActivegrade(8)}}>
      
        { activegrade === 8 ? <>

      {
        Quizdata.map((e,index)=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category={"Multiple-choice"} 
            tags={e[1].tags}
        onClick={()=>{props.quizData(Quizdata[index])
            navi('/test')
        }}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 9" className={activegrade === 9 ? "active-grade":""}
      onClick={()=>{setActivegrade(9)}}>
      
        { activegrade === 9 ? <>

      {
        Quizdata.map((e,index)=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category={"Multiple-choice"} 
            tags={e[1].tags}
        onClick={()=>{props.quizData(Quizdata[index])
            navi('/test')
        }}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 10" className={activegrade === 10 ? "active-grade":""}
      onClick={()=>{setActivegrade(10)}}>
      
        { activegrade === 10 ? <>

      {
        Quizdata.map((e,index)=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category={"Multiple-choice"} 
            tags={e[1].tags}
        onClick={()=>{props.quizData(Quizdata[index])
            navi('/test')
        }}/>
          )
        })

      }
        </>:<></>}
      </Grade>  
      <Grade title="Grade 11" className={activegrade === 11 ? "active-grade":""}
      onClick={()=>{setActivegrade(11)}}>
      
        { activegrade === 11 ? <>

      {
        Quizdata.map((e,index)=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category={"Multiple-choice"} 
            tags={e[1].tags}
        onClick={()=>{props.quizData(Quizdata[index])
            navi('/test')
        }}/>
          )
        })

      }
        </>:<></>}
      </Grade> 
      <Grade title="Grade 12" className={activegrade === 12 ? "active-grade":""}
      onClick={()=>{setActivegrade(12)}}>
      
        { activegrade === 12 ? <>

      {
        Quizdata.map((e,index)=>{
          return(
            <Thumbnail key={e[0]} title={e[0]} category={"Multiple-choice"} 
            tags={e[1].tags}
        onClick={()=>{props.quizData(Quizdata[index])
            navi('/test')
        }}/>
          )
        })

      }
        </>:<></>}
      </Grade> 
   </div>
   </>}
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
export default connect(mapStateToProps, mapDispatchToProps)(Content)