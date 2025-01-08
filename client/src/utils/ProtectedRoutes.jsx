import { Outlet, Navigate, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import { AppContent } from "../context/AppContext";
import axios from "axios";

const ProtectedRoutes =  () => {
  let authenticatedUser = false;
  const {userData,isLoggedin,backendUrl} = useContext(AppContent);
  const navigate = useNavigate();
  if (userData === undefined) {
    return null 
  }

  // If user is logged in and verified take them to dashboard
  if (isLoggedin && userData.isAccountVerified) {
    return <Outlet/>
  }

  // If user is just logged in but not verified, take them to email verify 
  if (isLoggedin && !userData.isAccountVerified) {
    return <Navigate to="/email-verify"/>
  }

  // If user is not logged in and not veriified,
  return <Navigate to="login"/>
  


}



export default ProtectedRoutes;