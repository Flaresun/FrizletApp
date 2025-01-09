import React, { useContext } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import EmailVerify from './pages/EmailVerify';
import ResetPassword from './pages/ResetPassword';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './pages/DashboardPages/Dashboard';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Flashcards from './components/DashboardComponents/Flashcards';
import Settings from './components/DashboardComponents/Settings';
import Donate from './components/DashboardComponents/Donate';
import About from './components/DashboardComponents/About';
import Contact from './components/DashboardComponents/Contact';
import Profile from './components/DashboardComponents/Profile';
import Privacy from './components/DashboardComponents/Privacy';
import { useEffect } from 'react';
import { AppContent } from './context/AppContext';
const App = () => {

  const {theme} = useContext(AppContent);

  let mode = localStorage.getItem("theme") === "true"? "light" : "dark";

  useEffect(() => {
    mode = theme ? "light" : "dark";
  },[theme])

  return (
    <div className={`${mode} overflow-hidden min-h-screen dark:bg-gradient-to-br from-slate-900 to-slate-400`}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/email-verify" element={<EmailVerify/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes> 
      
    </div>
  )
}

export default App