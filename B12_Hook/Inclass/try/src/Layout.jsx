import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
    };
    
  return (
    <div>
      <nav>
        <span
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            navigate("/aboutus");
          }}
        >
          About us
        </span>
      </nav>
        <Outlet />
    </div>
  );
}
