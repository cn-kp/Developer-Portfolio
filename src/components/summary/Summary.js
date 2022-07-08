import React from "react";
import "./Summary.scss";

export default function Summary() {
  return (
    <div className="summary" id="summary">
      <div className="img-container">
        <div className="img-card">
          <img
            src="assets/images/background-pic.jpg"
            alt=""
            className="summary-img"
          />
        </div>
      </div>
      <div className="about-container">
        <h1 className="about">About Me</h1>
        <p className="heading">
          Hi, I'm Kevin, a novice but aspiring software developer.
        </p>
        <p className="description">
          Full Stack Web developer and leveraging background in Civil
          Engineering and Commerce to provide unique perspectives on websites
          and software platforms. I build applications that are simple,
          effective, and put the user's thought-process first and bring forward
          the following for every project: • Problem-solving skills • Dedication to teamwork and flexible collaboration • A
          foundational knowledge of agile software development principles • A
          basic understanding of UX/UI principles
        </p>
        <div className="technology-container">
          <img src="assets/images/computer.webp" alt="" className="tech-icon" />
          <div className="skills-container">
            <h4 className="skills">Technical Skills</h4>
            <p className="skill-list">
              HTML, CSS, JavaScript, React JS, Node Js, MySQL, SCSS, Express,
              GraphQL, Restful API, Heroku, MongoDB & GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
