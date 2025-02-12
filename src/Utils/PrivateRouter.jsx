
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRouter = () => {

    const isloggedin = useSelector((state)=>state.isloggedin);
    const navigate = useNavigate();

    useEffect(()=>{
      const token = localStorage.getItem('token');
      if(!token || !isloggedin){
        navigate("/login")
      }
    },[isloggedin])

  return  <Outlet/> 
}

export default PrivateRouter