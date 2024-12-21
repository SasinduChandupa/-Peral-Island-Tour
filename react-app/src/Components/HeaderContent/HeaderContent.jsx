import React, { useState } from "react";
import "./HeaderContent.css";
import ltImage from "../../assets/logo.png";

function HeaderContent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navcontent">
      <div className="logo">
        <img src={ltImage} alt="Logo" />
        <h2>Peral Island Tour</h2>
      </div>
      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default HeaderContent;
