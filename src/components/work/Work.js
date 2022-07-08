import React, { useState, useEffect } from "react";
import "./Work.scss";
import WorkList from "./WorkList";
import { frontend, backend, fullstack, other } from "./WorkData";

export default function Work() {
  const [activeWork, setActiveWork] = useState(1);
  const [workData, setWorkData] = useState([]);
  const works = [
    {
      id: 1,
      title: "Front End",
    },
    {
      id: 2,
      title: "Back End",
    },
    {
      id: 3,
      title: "Full Stack",
    },
    {
      id: 4,
      title: "Other",
    },
  ];

  useEffect(() => {
    switch (activeWork) {
      case 1:
        setWorkData(frontend);
        break;
      case 2:
        setWorkData(backend);
        break;
      case 3:
        setWorkData(fullstack);
        break;
      case 4:
        setWorkData(other);
        break;
      default:
        setWorkData(frontend);
    }
  }, [activeWork]);
  return (
    <div className="work" id="work">
      <h1>Individual Work</h1>
      <ul>
        {works.map((work) => (
          <WorkList
            id={work.id}
            active={activeWork === work.id}
            title={work.title}
            setActive={setActiveWork}
          />
        ))}
      </ul>
      <div className="work-container">
        {workData.map((works) => (
          <div className="work-card">
            <a href={works.link}>
              <img src={works.img} alt={works.title}></img>
            </a>
            <h2>{works.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
