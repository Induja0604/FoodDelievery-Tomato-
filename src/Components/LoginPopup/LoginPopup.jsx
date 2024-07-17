

import React,{useState} from 'react'
import './LoginPopup.css'
import cross_icon from "../../assets/frontend_assets/cross_icon.png"

const LoginPopup = ({setShowLogin}) => {

   const[currState,setCurrState]=useState("Login")

  return (
    <div className='login-popup'>
      <form action=" " className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={cross_icon} alt="Close" />
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>: <input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login" }</button>
        <div className='login-popup-condition'>
            <input type="checkbox" required/>
            <p>I agree to the terms and conditions</p>
        </div>
         {currState === "Login" ? (
    <p>
      Don't have an account?{" "}
      <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
    </p>
  ) : (
    <p>
      Already have an account?{" "}
      <span onClick={() => setCurrState("Login")}>Log in</span>
    </p>
  )}
    </form>

    </div>
  )
}

export default LoginPopup
