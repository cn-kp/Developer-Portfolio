import React, { useState } from "react";
import "./Projects.scss";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Recipe Finder",
      img: "assets/images/recipe-finder.gif",
      description:
        "This application helps users find new recipe based on a set of dietary requirements. Recipes can be saved to local history and can be easily accessed. Relies on 2 API's and foundation CSS for the framework",
      link: "https://github.com/cn-kp/Recipe-FInder",
    },
    {
      id: 2,
      title: "Ecommerce Site",
      img: "assets/images/ecommerce.gif",
      description:
        "This application is based on a Star Wars Theme, where users can list items for sale and view other user's listing. Additionally, users can add items they would like to purchase to a cart. It uses SQL for the database, Restful API for the backend and handlebars for the UI framework",
      link: "https://github.com/cn-kp/Ecommerce-fullstack",
    },
    {
      id: 3,
      title: "Toys Trading Platform",
      img: "assets/images/prime-toys.gif",
      description: "A React application built for users to list unwanted toys for donation or for trades. Uses MongoDB for the database and GraphQl for the API",
      link: "https://github.com/cn-kp/Prime-Toys",
    },
  ];
  const [slider, setSlider] = useState(0);

  const handleSlider = (way) => {
    way === "left"
      ? setSlider(slider > 0 ? slider - 1 : 2)
      : setSlider(slider < projects.length - 1 ? slider + 1 : 0);
  };

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${slider * 100}vw)` }}
      >
        {projects.map((project) => (
          <div className="container">
            <div className="card">
              <div className="left">
                <div className="leftContainer">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <a href={project.link}>
                    <span>Github Repo</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={project.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/images/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleSlider("left")}
      />
      <img
        src="assets/images/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleSlider()}
      />
    </div>
  );
}
