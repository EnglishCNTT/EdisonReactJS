import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useState } from 'react'

export default function Header() {
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();
    const checkStatus = () => {
        if (!loginStatus) {
            setTimeout(() => {
                navigate("/login");
                alert("You are not logged in ! Let do it ! ");
                setLoginStatus(true);
              }, 1000);
        } else {
            setTimeout(() => {
                alert("You are logged in");
                navigate("/home");
              }, 1000);
            
        }
    };
  return (
    <div>
        
      <Link onClick={checkStatus} >Home</Link>
      <span>----</span>
      <Link onClick={checkStatus}>Login</Link>
      <h3>STATUS LOGIN : {loginStatus.toString()}</h3>
    </div>
  )
}
