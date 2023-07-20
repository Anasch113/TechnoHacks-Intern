import React from 'react'
import pic1 from "../assets/pc.png"
import pic2 from "../assets/rc.png"
import pic3 from "../assets/icons.png"
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import "./register.css"
const Register = () => {
    const navigate  = useNavigate();
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userError, setUserError] = useState("")
    const [passwordError, setPasswordError] = useState("")
const hanldeLogin = (e)=>{
  
    e.preventDefault();
    if( user.length< 4 || password.length<4){
        alert('Please fil all fields correctly')
    }
    else{
        alert("Registration Successfull")
        navigate("/registration126881ag16a")
    }
}
const userHandler = (e)=>{
let item = e.target.value;
if(item.length<3){
  setUserError(true)
}
else{
  setUserError(false)
}
setUser(item)
}
const passwordHandler = (e)=>{
let item = e.target.value;
if(item.length<4){
    setPasswordError(true, "Weak Password")

}
  else {
    setPasswordError(false)
}
setPassword(item)
}
  return (
    <div className="container">
        <div className="main-container">
            <div className="left-container">
        <img id='hhh' src={pic2} alt="" />
<img src={pic1} alt="" />

            </div>
            <div className="right-container">
<form action="Home" className="form" onSubmit={hanldeLogin}>
    <div className="form-heading">
        <h3>Please Fill out form to register</h3>
    </div>
    <div className="inputs">
        <label htmlFor="">Full Name</label>
        <input type="text" name='username' placeholder='Full Name' />
    </div>
    <div className="inputs">
        <label htmlFor="">User Name</label>
        <input type="text" name='fullname' onChange={userHandler}  minLength={1} required placeholder='User Name' />
        {userError?<span>Atleast four chracters</span>:""}
    </div>
    <div className="inputs">
        <label htmlFor="">Email</label>
        <input type="email" name='email' placeholder='Email Address' required />
    </div>
  
    <div className="inputs">
        <label htmlFor="">Password</label>
        <input type="password" onChange={passwordHandler} name='password' placeholder='Password' minLength={4} required />
        {passwordError?<span>Please choose strong password</span>:""}
    </div>
    <div className="inputs">
        <label htmlFor="">Confirm Password</label>
        <input type="password"  name='password' placeholder='Retype Password' minLength={4} required />
    </div>
    <button type='submit' id='btn'>Register</button>
<div className="acc">
    <p>Already have an acccont?

    </p>
    <img src={pic3}alt="" />
</div>
</form>
            </div>
        </div>
       
    </div>
  )
}

export default Register
