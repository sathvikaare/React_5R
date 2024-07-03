// import { Margin } from "@mui/icons-material";
import React from "react";
import {  NavLink } from "react-router-dom";
import "./navbar.css";
export default function NavBar(){
    const LinkStyle={
        textDecoration:"none",
    }
    const ListStyle={
        margin:10,
    }
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={ListStyle}>
        {/* <a className="nav-link active" href="#">
          Home
        </a> */}
        <NavLink to={"/"} style={LinkStyle}>Home</NavLink>
      </li>
      <li className="nav-item" style={ListStyle}>
        {/* <a className="nav-link" href="#">
          About
        </a> */}
        <NavLink to={"/about"} style={LinkStyle}>About</NavLink>
      </li>
      <li className="nav-item" style={ListStyle}>
        {/* <a className="nav-link" href="#">
          Contact
        </a> */}
        <NavLink to={"/setting"} style={LinkStyle}>Settings</NavLink>
      </li>
      <li className="nav-item" style={ListStyle}>

        {/* <a className="nav-link" href="#"> */}
         <NavLink to={"/contact"} style={LinkStyle}>Contact</NavLink> 
        {/* </a> */}
      </li>
      
    </ul>
  </div>
</nav>
    )

}