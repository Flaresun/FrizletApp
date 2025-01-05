import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './pages/DashboardPages/Dashboard';
import ProtectedRoutes from './utils/ProtectedRoutes';

const App = () => {
  return (
    <div className=''>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/email-verify" element={<EmailVerify/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
      </Routes> 
      
    </div>
  )
}

export default App