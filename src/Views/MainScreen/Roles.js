import { useEffect, useState } from 'react'
import '../Login/Login.scss'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, isSignInWithEmailLink } from "firebase/auth";
import Button from '../../Assets/Buttons/Button';

function Roles() {
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [wrong,setWrong] = useState(false)
  const navi = useNavigate()

  //
  const [count,setCount] = useState(0)
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 

    const user = userCredential.user;
    navi("/dashboard")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // ..
  });
  useEffect(()=>{
    console.log(auth.currentUser?.photoURL,auth.currentUser?.displayName);
    console.log("aaaaaa");
    if (!(auth.currentUser?.displayName === "Trung Dũng Đặng Huỳnh")){
        window.alert("You have no permission")
        navi('/dashboard') //yes
    }
    
})
  return (
    <div className="Screen">
        <div className="Login-wrapper">
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
        <Button text="Create" onClick={()=>{
           createUserWithEmailAndPassword(auth,email,pass)}}/>
    </div>
    </div>
  )
}

export default Roles