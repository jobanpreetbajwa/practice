import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [menu, setMenu] = useState(false);
  const [hover, sethover] = useState(false);
  const [move, setMove] = useState(0);
  // const [dropDown, setDropdown] = useState("");
  const menuHandler = () => {
    setMenu(!menu);

    console.log("clicked");
  };
  const hoverHandler = () => {
    sethover(true);
  };
  const movementHandler = (e) => {};
  return (
    <>
      <div className="sidebar">
        <div className={`sidebar-top ${menu ? "clicked" : ""}`}>
          <p onClick={menuHandler}>Table of content</p>
          <span>^</span>
        </div>
        {menu && (
          <div className={`menubar ${menu ? "clicked" : ""}`}>
            <ul>
              <li>
                <Link to="">Logo</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/solution">solutions</Link>
              </li>
            </ul>
          </div>
        )}
        <div
          className="sidebar-bottom"
          onMouseOver={hoverHandler}
          onMouseOut={() => {
            sethover(false);
          }}
        >
          {hover && (
            <div className="hovered" onMouseMove={movementHandler}></div>
          )}
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
