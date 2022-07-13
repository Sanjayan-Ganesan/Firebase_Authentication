import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from './AuthContext'

const ProtectedRoute = ({children}) => {

const {user} = UserAuth();

  if(!user){
      return <Navigate to='/Login'/>
  }
  return children;
}

export default ProtectedRoute