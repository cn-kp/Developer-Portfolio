import React, {useState} from "react";
import "./Navbar.scss";

export default function Navbar({hamburgerState,setHamburgerState}) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul className="quick-links">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#work">Individual work</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <div className="navbar-mobile">
          <div className="hamburger-icon" onClick={() => setHamburgerState(!hamburgerState) }>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
