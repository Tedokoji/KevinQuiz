import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { quizData } from '../../../Redux/Action'
import './TestSheet.scss'
function TestSheet(props) {
  console.log(props.quizDatadata);
const [ans,setAns] = useState({
    A: '',
    B: '',
    C: '',
    D: ''
})
const [correctone,setCorrectone] = useState('')

const [count,setCount] = useState(1)

  useEffect(()=>{
    setAns()
    setCount()
  },[ans])
  return (<>
                        <div className="textshittest">
                          {
                            props.quizDatadata[0]
                          }
                          </div> 
   <br/>
                <div className='sorting-form'>
                <div className='Quiz-create-form'>
                     
                    <div className="create-Quiz-ahhhhhh">
                        <div className='create-quiz-formmmm' >
                        {count}. 
                   
                            
                        </div>
                        <br/>
                      
                        <div onClick={()=>{setCorrectone("A")}}
                         className={`ans ${correctone === "A" ? "ans-selected":""}`}>A
                            
                            
                         </div>     
                         <div onClick={()=>{setCorrectone("B")}}
                          className={`ans ${correctone === "B" ? "ans-selected":""}`}>B
                            
                            
                         </div>  
                         <div onClick={()=>{setCorrectone("C")}}
                          className={`ans ${correctone === "C" ? "ans-selected":""}`}>C
                           
                            
                        </div>  
                        <div onClick={()=>{setCorrectone("D")}}
                         className={`ans ${correctone === "D" ? "ans-selected":""}`}>D
                           
                            
                        </div>  
                       

                      <br/>
                    </div>
                </div>
            </div>
            <br/>
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