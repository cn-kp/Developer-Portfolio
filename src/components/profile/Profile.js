import React from "react";
import "./Profile.scss";

import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Profile() {
  return (
    <div className="profile" id="profile">
      <div className="profile-main">
        <div className="profile-details">
          <div className="social-media">
            <div className="social-media-icons">
              <a href="https://www.facebook.com/kevinpeng123">
                <AiFillFacebook size={30} />
              </a>
              <a href="https://github.com/cn-kp">
                <AiFillGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/kevin-peng-3299b41a2/">
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
          <div className="profile-name">
            <span className="primary-text">
              Hello, I am <span className="name-style">Kevin Peng</span>
            </span>
          </div>
          <div className="profile-roles">
            <h1>Full Stack Developer 🖥️</h1>
            <span className="profile-summary">
              Creating applications using the MERN Stack
            </span>
          </div>
          <div className="profile-resume">
            <a href="kevin-resume.pdf" download="kevin-resume.pdf">
              <button className="resume-download">
                My Resume
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-background"></div>
        </div>
      </div>
    </div>
  );
}
