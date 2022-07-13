import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Account from './components/Account';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';

function App() {
  return (
    <div className='App'>
      
<AuthContextProvider>
<Routes>
  <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>

</AuthContextProvider>
      
    </div>
  );
}

export default App;