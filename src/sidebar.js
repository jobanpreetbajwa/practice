import React, { useState } from "react";
import "./sidebar.css";
export default function Sidebar() {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(true);
    console.log("clicked");
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <p onClick={menuHandler}>Table of content</p>
          <span>^</span>
        </div>
        <div className={`menubar ${menu ? "clicked" : ""}`}>
          <ul>
            <li>
              <p>Logo</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Features</p>
            </li>
            <li>
              <p>solutions</p>
            </li>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <img alt="image"></img>
          <h3>Introducing Galileo AI</h3>
          <p>
            LogRocket’s Galileo AI watches every session, surfacing impactful
            user struggle and key behavior patterns.
          </p>
          <button className="sidebar-btn">Read The Blog Post </button>
        </div>
      </div>
    </>
  );
}
