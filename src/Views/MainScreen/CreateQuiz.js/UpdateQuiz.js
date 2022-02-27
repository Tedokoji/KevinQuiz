import React,{ useState} from 'react'
import './CreateQuiz.scss'
import {  ref, update } from "firebase/database";
import {database} from '../../../Firebase/index'
import { connect } from 'react-redux'
import { quizData } from '../../../Redux/Action'
import { useNavigate } from 'react-router-dom'
function UpdateQuiz(props) {
 const navi= useNavigate()
 const [count,setCount] = useState(0)
 const [question,setQuestion] = useState(props.quizDatadata[1][count]?.question  ) 
  
 const [ans,setAns] = useState({
     A: props.quizDatadata[1][count]?.ans.A,
     B: props.quizDatadata[1][count]?.ans.B,
     C: props.quizDatadata[1][count]?.ans.C,
     D: props.quizDatadata[1][count]?.ans.D
 })
 const [correctone,setCorrectone] = useState(props.quizDatadata[1][count]?.correct)

 const addQuizesToDB=()=>{
     console.log(count)//count=count
     setCount(count+1)
      //count still = count @@ lmao what
     update(ref(database,'Grade/' + props.quizDatadata[1][count]?.grade + '/Unit/' + props.quizDatadata[1][count]?.unit + "/" + props.quizDatadata[0]+"/"+count ), {
         question:question,
         ans:ans,
         correct:correctone
         
        });
        if(count >= (Object.keys(props.quizDatadata[1]).length)-2){
           setCount(0)
           navi("/dashboard")
           return
         }
        setQuestion(props.quizDatadata[1][count+1]?.question)
        setCorrectone(props.quizDatadata[1][count+1]?.correct)
        setAns({
            A: props.quizDatadata[1][count+1]?.ans.A,
            B: props.quizDatadata[1][count+1]?.ans.B,
            C: props.quizDatadata[1][count+1]?.ans.C,
            D: props.quizDatadata[1][count+1]?.ans.D
        })

 }
  return (
    <>
     <div className="textshittest">
                         Updating:  {
                            props.quizDatadata[0]
                          }
                            ------number of question(s):{(Object.keys(props.quizDatadata[1]).length)-1}
                          </div> 
        <div className='sorting-form'>
        <div className='Quiz-create-form'>
             
            <div className="create-Quiz-ahhhhhh">
                <div className='create-quiz-formmmm' >
                {count+1}.    <textarea value={question} onChange={(e)=>{
                setQuestion(e.target.value)
                
                }}
            type="text" className="quiz-inputz"/>
                    
                </div>
                <br/>
              
                <div onClick={()=>{setCorrectone("A")}}
                 className={`ans ${correctone === "A" ? "ans-selected":""}`}>A
                    <input value={ans.A} onChange={(e)=>{
                setAns({...ans,A:e.target.value})
                
                }}
            type="text" className="quiz-input"/>
                    
                 </div>     
                 <div onClick={()=>{setCorrectone("B")}}
                  className={`ans ${correctone === "B" ? "ans-selected":""}`}>B
                    <input value={ans.B} onChange={(e)=>{
                setAns({...ans,B:e.target.value})
                
                }}
            type="text" className="quiz-input"/>
                    
                 </div>  
                 <div onClick={()=>{setCorrectone("C")}}
                  className={`ans ${correctone === "C" ? "ans-selected":""}`}>C
                    <input value={ans.C} onChange={(e)=>{
                setAns({...ans,C:e.target.value})
                
                }}
            type="text" className="quiz-input"/>
                    
                </div>  
                <div onClick={()=>{setCorrectone("D")}}
                 className={`ans ${correctone === "D" ? "ans-selected":""}`}>D
                    <input value={ans.D} onChange={(e)=>{
                setAns({...ans,D:e.target.value})
                
                }}
            type="text" className="quiz-input"/>
                    
                </div>  
                <div className='create-quiz-formmmm'>
                   Warning: highlighted option <br/>will be 
                    the correct one
                    </div>

              <br/>
            </div>
        </div>
    </div>
    <br/>
                <div className='createquizbtn' onClick={addQuizesToDB} >
                    Save
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
  export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuiz)