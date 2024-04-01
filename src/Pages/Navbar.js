import React from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/images/symbi_logo.png";
import "../Assets/css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Signup</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
