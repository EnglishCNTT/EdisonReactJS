import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    if (window.confirm("Are you sure?")) {
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
      window.close();
    } else {
      setTimeout(() => {
        navigate("/");
      }, 3000);
  
      window.alert("You are not admin");
      window.close();
    }
  };
  return (
    <div>
          <Link to="/">Home</Link>
          <span>-</span>
          <Link onClick={handleClick}>Admin</Link>
    </div>
  );
}