import React from 'react'
import { connect } from 'react-redux'
import { GET_QUIZES } from '../../../Redux/Types'
import './Content.scss'
function Content(props) {
  return (
    <div className="content">

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