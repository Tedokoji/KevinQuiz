import React, { useState } from 'react'
import { connect } from 'react-redux'
import { GET_QUIZES } from '../../../Redux/Types'
import './Content.scss'


import Thumbnail from '../../../Assets/QuizAssets/Thumbnail';
import Grade from '../Quiz/Grade';



function Content(props) {
  const [rendergrade, setrenderGrade] = useState({
    grade12: false,
    grade11:false,
    grade10:false,
    grade9:false,
    grade8:false,
    grade7:true,
  })
  return (
    <div className="content">
               <Grade title="Grade 7" className={rendergrade.grade7 &&"active-grade"}
      onClick={()=>{setrenderGrade({...rendergrade,grade7:!rendergrade.grade7});}}>
        { rendergrade.grade7 && <>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        
        
        </>}
      </Grade>
               <Grade title="Grade 8" className={rendergrade.grade8 &&"active-grade"}
      onClick={()=>{setrenderGrade({...rendergrade,grade8:!rendergrade.grade8});}}>
        { rendergrade.grade8 && <>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        
        
        </>}
      </Grade>
               <Grade title="Grade 9" className={rendergrade.grade9 &&"active-grade"}
      onClick={()=>{setrenderGrade({...rendergrade,grade9:!rendergrade.grade9});}}>
        { rendergrade.grade9 && <>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        
        
        </>}
      </Grade>
          <Grade title="Grade 10" className={rendergrade.grade10 &&"active-grade"}
      onClick={()=>{setrenderGrade({...rendergrade,grade10:!rendergrade.grade10});}}>
        { rendergrade.grade10 && <>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        
        
        </>}
      </Grade>
      <Grade title="Grade 11" className={rendergrade.grade11 &&"active-grade"}
      onClick={()=>{setrenderGrade({...rendergrade,grade11:!rendergrade.grade11});}}>
        { rendergrade.grade11 && <>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        
        
        </>}
      </Grade>
      <Grade title="Grade 12"  className={rendergrade.grade12 &&"active-grade"}
      onClick={()=>{setrenderGrade({...rendergrade,grade12:!rendergrade.grade12});}}>
      { rendergrade.grade12 && <>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
        <Thumbnail title="De thi THPT" category="Unit 10" tags="Quiz,THPT,Femdom,Monster girl"
        onClick={()=>{console.log("hello!");}}/>
       
        
        </>}
      </Grade>
   </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    quizes: state.quizes
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    getQuizes: ()=>{dispatch(GET_QUIZES())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content)