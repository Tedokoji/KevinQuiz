import React from 'react'
import { connect } from 'react-redux'
import { GET_QUIZES } from '../../../Redux/Types'
import './Content.scss'

import {  ref, set } from "firebase/database";
import { database } from '../../../Firebase';



function Content(props) {

  function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  return (
    <div className="content">
      <button onClick={()=>{writeUserData(1, 'name', 'email', 'imageUrl')}}>Add Test</button>
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