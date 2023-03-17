import "./header.css";
import React from 'react'
import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className="header">
    <a href="/">
    <img src={Logo} alt="" className="logo" />
    </a>
    <ul className="header-menu">
      <li>Home</li>
      <li>Programs</li>
      <li>Why us</li>
      <li>Plans</li>
      <li>Testimonials</li>
    </ul>
    
    
    </div>
  )
}

export default Header