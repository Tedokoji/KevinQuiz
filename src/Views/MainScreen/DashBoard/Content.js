import React, { useState } from 'react'
import { connect } from 'react-redux'
import { GET_QUIZES } from '../../../Redux/Types'
import './Content.scss'

import {  ref, set } from "firebase/database";
import { database } from '../../../Firebase';
import Thumbnail from '../../../Assets/QuizAssets/Thumbnail';
import Grade from '../Quiz/Grade';



function Content(props) {
  const [rendergrade, setrenderGrade] = useState({
    grade12: false,
    grade11:true
  })
  function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  return (
    <div className="content">
      <Grade title="Grade 11" 
      onClick={()=>{setrenderGrade({...rendergrade,grade11:!rendergrade.grade11});}}>
        { rendergrade.grade11 && <>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        </>}
      </Grade>
      <Grade title="Grade 12"  
      onClick={()=>{setrenderGrade({...rendergrade,grade12:!rendergrade.grade12});}}>
      { rendergrade.grade12 && <>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
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