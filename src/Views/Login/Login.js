import { useEffect, useState } from 'react'
import './Login.scss'
import {signInWithPopup, signInWithEmailAndPassword  } from "firebase/auth";
//  import {FacebookAuthProvider,GoogleAuthProvider} from "firebase/auth";
import { auth,provider,fbprovider } from '../../Firebase';
import kevinlogo from '../../staticfiles/Kevin logo.jpg';
import ggicon from '../../staticfiles/gg.png';
import fbicon from '../../staticfiles/fb.png';
import Button from '../../Assets/Buttons/Button';
import { useNavigate } from 'react-router-dom';
import LoginButton from '../../Assets/Buttons/LoginButton';
function Login() {
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [wrong,setWrong] = useState(false)
  const navi = useNavigate()
  const signIntWithGoogleAuth =()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const user = result.user;   
    navi('/dashboard')
  }).catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const email = error.email;
    // const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }
  const signInWithFacebookAuth = ()=>{
    signInWithPopup(auth, fbprovider)
    .then((result) => {
      // The signed-in user info.
      // const user = result.user;
  
      // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const accessToken = credential.accessToken;
      navi('/dashboard')

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // // The AuthCredential type that was used.
      // const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
  }
  const signInWithFakeEmailandPass=async()=>{
    console.log("singin")
    try{
      const user = await signInWithEmailAndPassword(auth,email,pass)
      if (user){
          navi('/dashboard')
      }
    }
    catch{
      console.log('wrong')
      setWrong(true)
      setCount(count+1)
    }
  }
  const [count,setCount] = useState(0)
  const [Teacher,setTeacher] = useState(false)
  const [Student,setStudent] = useState(true)
  useEffect(()=>{
    console.log('rerender login')
  })
  return (
    <div className="Screen">
      <div className="Login-wrapper">
        <img className="kevinlogo" alt="kevinlogo" src={kevinlogo}/>
        <div className="selector">
          <div className={`the-selector ${Student && "active"}`}
          onClick={()=>{setStudent(true);setTeacher(false)}}
          > 
            Student
          </div>
          <div className={`the-selector ${Teacher && "active"}`}
          onClick={()=>{setTeacher(true);setStudent(false)}}
          
          > 
            Teacher
          </div>
        </div>
        { Student && <>
        <h2>Student login:</h2>
        <LoginButton text="Sign In With Google" src={ggicon}
         onClick={signIntWithGoogleAuth}/>
         <LoginButton text="Sign In With Facebook" src={fbicon}
         onClick={signInWithFacebookAuth}/>
        </>}
       { Teacher && <>
        <h2>Teacher login:</h2>

        <p>email:</p>
          <input 
           onChange={(e)=>{setEmail(e.target.value)}}
          className={`email ${wrong && 'wrong'}`}/>
        <p>password:</p>
          <input  type="password" 
          onChange={(e)=>{setPass(e.target.value)}}
          className={`password ${wrong && 'wrong'} ${count >= 5 ? 'invis':''} `}/>
          {count >= 5 ? <h2>Bro why you must hack this web man, damn.<br/>
             Leave my web alone, please, I'm begging you.</h2>: <></>}
        <Button text="Sign In" onClick={signInWithFakeEmailandPass}/>
        </>
       }
      </div>
    </div>
  )
}

export default Login