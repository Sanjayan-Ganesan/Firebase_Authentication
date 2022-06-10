import {React,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth} from '../context/AuthContext'


const Login = () => {


    const[email,SetEmail] = useState('')
const[password,SetPassword] = useState('')
const[error,SetError] = useState('')

const navigate = useNavigate();

const {signIn} = UserAuth();


const handleSubmit = async (e)=>{
    e.preventDefault()
    SetError('');
    try{

        await signIn(email,password)
        navigate('/Account')

        navigate('/Account')
    }catch (e){
        SetError(e.message)
        console.log(e.message);
    }

}

  return (
      <>
      <h1>Login to Your Account</h1>
      <div id='login_box'>
<form onSubmit={handleSubmit}>
<div id='email_box'>
    <label id='email_text'>Enter Email: </label>
    <input placeholder='Enter Email Address...' type={`email`} onChange={(e)=>{SetEmail(e.target.value)}}/>
</div>

<div id='password_box'>
    <label id='password_text'>Enter Password: </label>
    <input placeholder='Enter Password...' type={`password`} onChange={(e)=>{SetPassword(e.target.value)}}/>
</div>

<div id='login_button'> 
    <button id='btn'>Login</button>
</div>
</form>
<div id='signup_link'>
<h4>Don't have an Account <Link to='/Signup'>Sign up</Link></h4>
</div>

      </div>
      </>
    
  )
}

export default Login