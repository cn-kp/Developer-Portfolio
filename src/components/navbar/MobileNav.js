import React from 'react'
import "./MobileNav.scss"

export default function MobileNav({hamburgerState,setHamburgerState}) {
  return (
    <div className={"mobileNav "+(hamburgerState && "active")}>
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
    </div>
  )
}
