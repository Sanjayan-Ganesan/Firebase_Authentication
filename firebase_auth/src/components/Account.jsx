import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'


const Account = () => {

const{user,logout} = UserAuth();

const Navigate = useNavigate();

const handlelog = async()=>{

try {

  await logout();
Navigate('/')

}catch (e){
  console.log(e.message)
}


}

  return (
    <div>
      <div>
        <h4>User Email:{user && user.email}</h4>
        <button onClick={handlelog}>Log out</button>
      </div>
    </div>
  )
}

export default Account