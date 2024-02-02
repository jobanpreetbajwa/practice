import React, { useRef, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [menu, setMenu] = useState(false);
  const [hover, sethover] = useState(false);

  const innerRef = useRef();
  const menuHandler = () => {
    setMenu(!menu);

    console.log("clicked");
  };
  const hoverHandler = (e) => {
    sethover(true);
  };
  const movementHandler = (e) => {
    const outerDivRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - outerDivRect.x;
    const y = e.clientY - outerDivRect.y;
    // const { offsetX, offsetY } = e.nativeEvent;
    console.log(x, y);
    innerRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };
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
            <div
              ref={innerRef}
              className="hovered"
              onMouseMove={movementHandler}
            ></div>
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
