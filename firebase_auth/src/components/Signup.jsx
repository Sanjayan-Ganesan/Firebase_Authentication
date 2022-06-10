import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


//import {UserAuth} from '../context/AuthContext'

const Signup = () => {

const[email,SetEmail] = useState('')
const[password,SetPassword] = useState('')
const[error,SetError] = useState('')
const navigate = useNavigate();

//const createUser = UserAuth();

const {createUser} = UserAuth();

const handleSubmit = async (e)=>{
    
e.preventDefault();
SetError('');
try{
 
await createUser(email,password)
navigate('/Account')

}
catch (e){

  SetError(e.message);
  console.log(e.message)

}


}


const handle_E_Change = (e)=>{

    SetEmail(e.target.value);
   

}


const handle_P_Change = (e)=>{
    SetPassword(e.target.value)
   
}

  return (
    <>
    
    <h1>Create an Account</h1>
      <div id='login_box'>
<form onSubmit={handleSubmit}>
<div id='email_box'>
    <label id='email_text'>Enter Email: </label>
    <input placeholder='Enter Email Address...' type={`email`} onChange={handle_E_Change}/>
</div>

<div id='password_box'>
    <label id='password_text'>Enter Password: </label>
    <input placeholder='Enter Password...' type={`password`} onChange={handle_P_Change}/>
</div>

<div id='login_button'> 
    <button id='btn'>Sign up</button>
</div>
</form>

<div id='signup_link'>
<h4>Already have an Account <Link to='/'>Sign in</Link></h4>
</div>

      </div>
    
    
    
    </>
  )
}

export default Signup