import React from "react";
import "./WorkList.scss";

export default function WorkList({
  id,
  active,
  setActive,
  title,
}) {
  return (
    <li
      className={active ? "work-list active" : "work-list"}
      onClick={() => setActive(id)}
    >
      {title}
    </li>
  );
}
