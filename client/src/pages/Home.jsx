import React, { useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
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
    <div className='max-w-[200rem]'>
        <NavBar/>
        <Header/>
        <Stats />
        <Main />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home

