import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setTimeout(() => {
        alert("Login Success");
        navigate("/home");
        }, 1000);
  };





  return (
    <div>
   
      <button onClick={handleSubmit}>Log In</button>

    </div>
  );
};

export default Login;
