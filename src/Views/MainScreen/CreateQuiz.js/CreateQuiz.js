import React,{useEffect, useState} from 'react'
import './CreateQuiz.scss'
import 'react-edit-text/dist/index.css';
import {  ref, set } from "firebase/database";
import {database} from '../../../Firebase/index'
function CreateQuiz() {
 const grade6to12 = [
     6,
     7,
     8,
     9,
     10,
     11,
     12,
    ]
 const ABCD = ["A", "B", "C", "D"]
 const [grade,setGrade] = useState(6)
 const [unit,setUnit] = useState(1)
 const [tags,setTags] = useState("")
 const [title,setTitle] = useState("")
 const [question,setQuestion] = useState("d")
 const [ans,setAns] = useState({
     A: 'a',
     B: 'b',
     C: 'c',
     D: 'd'
 })
 const [correctone,setCorrectone] = useState('A')
 useEffect(() => {
     console.log(ans);
 })

 const [count,setCount] = useState(0)
 const [CreateQuizToggle,setCreateQuizToggle] = useState(false)
 const CreateQuizInfos =()=>{
    
       
        
        set(ref(database, 'Grade/' + grade + '/Unit/' + unit + "/" + title), {
            tags:tags,
            
           });
         
 }
 const addQuizesToDB=()=>{

 }
  return (
    <div className='createquiz'>
        <div className='createform'>
          { CreateQuizToggle === true ? <></>:<>  <div className='sorting-form'>
                <div className='create-grade'>
                    Grade:{
                        grade6to12.map(e=>{
                            return(
                                <span onClick={()=>{setGrade(e)}} className={grade === e ? "grade-selected":""} 
                                key={e}>{e}</span>
                            )
                        })
                    }
                </div>
                <div className='create-unit'>
                  Unit:<input value={unit} onChange={(e)=>{
                      setUnit(e.target.value)
                      
                    }}
                  type="number" className="unit-input"/>
                </div>
                <div className='create-unit'>
                  Tags:<input value={tags} onChange={(e)=>{
                      setTags(e.target.value)
                      
                    }}
                  type="text" className="unit-input"/>
                </div>
                    <div className='create-unit'>
                    Title:<input value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                        
                        }}
                    type="text" className="unit-input"/>
                    </div>
                
            </div>
            <br/>
                   <div className='createquizbtn' onClick={()=>{
                       CreateQuizInfos()
                       
                       setCreateQuizToggle(true)}}>
                        CreateQuiz
                    </div>
                    </>}
            <br/>
           { CreateQuizToggle &&<>
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


                      <br/>
                    </div>
                </div>
            </div>
            <br/>
                        <div className='createquizbtn' onClick={()=>{
                            addQuizesToDB()
                            }}>
                            Save
                        </div>
            </>
           }
        </div>
    </div>
  )
}

export default CreateQuiz