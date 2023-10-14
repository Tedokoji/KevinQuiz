import React, { useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { quizData } from '../../../Redux/Action'
import './TestSheet.scss'
import Timer from './Timer'
function TestSheet(props) {
  const navi = useNavigate()
  const [points,setPoints] = useState(0);
  const [count,setCount] = useState(0)
  const [correctone,setCorrectone] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  })
  console.log(correctone.A);
  const [answeringcheck,setAnsweringcheck] = useState(true)
  useLayoutEffect(()=>{
    

    
  })
  return (<>
                        <div className="textshittest">
                          {
                            props.quizDatadata[0]
                          }
                          -number of question(s):{(Object.keys(props.quizDatadata[1]).length)-1}
                          -Hint: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click here</a>
                          -Points: {points}
                          <Timer initialMinute={((Object.keys(props.quizDatadata[1]).length)-1)} initialSeconds={0}></Timer>
                          </div> 
   <br/>
                <div className='sorting-form'>
                <div className='Quiz-create-form'>
                     
                    <div className="create-Quiz-ahhhhhh">
                        <div className='create-quiz-formmmm decorfont' >
                        {count+1}.{props.quizDatadata[1][count]?.question }
                          
                            
                        </div>
                        <br/>
                      
                        <div onClick={()=>{
                          setAnsweringcheck(false)
                          if(props.quizDatadata[1][count]?.correct == "A" ){
                            setPoints(points + 1)
                          }
                        }}
                         className={`ans ${answeringcheck && "idle"} 
                         ${props.quizDatadata[1][count]?.correct !== "A"? "wrongchoicebitch" :""}
                         decorfont ${props.quizDatadata[1][count]?.correct === "A" ?
                          "ans-selected":""}`}>
                           A. {props.quizDatadata[1][count]?.ans.A}
                            
                            
                         </div>     
                         <div onClick={()=>{
                          setAnsweringcheck(false)
                          if(props.quizDatadata[1][count]?.correct == "B" ){
                            setPoints(points + 1)
                          }
                        }}
               className={`ans ${answeringcheck && "idle"}  
               ${props.quizDatadata[1][count]?.correct !== "B"? "wrongchoicebitch" :""}
               decorfont ${props.quizDatadata[1][count]?.correct === "B" ?
                           "ans-selected":""}`}>
                            B. {props.quizDatadata[1][count]?.ans.B}
                            
                            
                         </div>  
                         <div onClick={()=>{
                          setAnsweringcheck(false)
                          if(props.quizDatadata[1][count]?.correct == "C" ){
                            setPoints(points + 1)
                          }
                        }}
                          className={`ans ${answeringcheck && "idle"} 
                          ${props.quizDatadata[1][count]?.correct !== "C"? "wrongchoicebitch" :""}
                          decorfont ${props.quizDatadata[1][count]?.correct === "C" ?
                           "ans-selected":""}`}>
                            C. {props.quizDatadata[1][count]?.ans.C}
                           
                            
                        </div>  
                        <div onClick={()=>{
                          setAnsweringcheck(false)
                          if(props.quizDatadata[1][count]?.correct == "D" ){
                            setPoints(points + 1)
                          }
                        }}
                         className={`ans ${answeringcheck && "idle"}  
                         ${props.quizDatadata[1][count]?.correct !== "D"? "wrongchoicebitch" :""}
                         decorfont ${props.quizDatadata[1][count]?.correct === "D" ?
                          "ans-selected":""}`}>
                           D. {props.quizDatadata[1][count]?.ans.D}
                           
                            
                        </div>  

                      <br/>
                    </div>
                </div>
            </div>
            <br/>
                    <div className='createquizbtn' onClick={()=>{
                      setAnsweringcheck(true)
                      setCount(count+1)
                      
                      setCorrectone({ A: "",
                      B: "",
                      C: "",
                      D: "",})
                      if(count >= (Object.keys(props.quizDatadata[1]).length)-2){
                        setCount(0)
                        setPoints(0)

                        navi("/dashboard")
                      }
                    
                    
                    }
                  
                  
                  }
                    
                    >
                        Next
                    </div>
            </>
           
  
  )
}

const mapStateToProps = (state)=>{
  return{
    quizDatadata: state.dataQuiz
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    quizData: (e)=>{dispatch(quizData(e))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestSheet)