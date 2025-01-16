import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import Stats from '../components/Stats'
import Main from '../components/Main'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import { AppContent } from '../context/AppContext'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {userData, getUserData,isLoggedin} = useContext(AppContent);
  const navigate = useNavigate();  

  useEffect(() => {
    isLoggedin && userData && userData.isAccountVerified && navigate("/dashboard")
  },[isLoggedin, userData])


  return (
    <div className='max-w-[200rem] min-h-screen  bg-white'>
        <Navbar/>
        <Header/>
        <Stats />
        <Main />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home

