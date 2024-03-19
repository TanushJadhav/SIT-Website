import React from "react";
import logo from '../Assets/images/symbi_logo.png'
import '../Assets/css/Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  function nav_signup(event) {
    navigate('/signup');
  }

  function nav_home(event) {
    navigate('/');
  }

    return(
        <div className="navbar">
            <div className="left">
              <img src={logo} className="logo" alt="logo" />
            </div>

            <div className="right">
                <a onClick={nav_signup}>Sign Up</a>
                <a onClick={nav_home}>Home</a>
            </div>
        </div>
    )
}

export default Navbar;