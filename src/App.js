import React, { useState } from "react";

import Contact from "./components/contacts/Contact";
import MobileNav from "./components/navbar/MobileNav";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Work from "./components/work/Work";
import Summary from "./components/summary/Summary";
import Project from "./components/project/Projects";

import "./App.scss";
import "./reset.scss";

function App() {
  const [hamburgerState, setHamburgerState] = useState(false);
  return (
    <div className="App">
      <Navbar hamburgerState={hamburgerState} setHamburgerState={setHamburgerState}/>
      <MobileNav hamburgerState={hamburgerState} setHamburgerState={setHamburgerState}/>
      <div className="portfolio-section">
        <Profile />
        <Summary />
        <Project />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
