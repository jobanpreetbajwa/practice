import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-top">
          <p>Advisory boards aren’t only for executives.</p>
        </div>
        <div className="navbar">
          <ul className="navbar-content">
            <li>
              <Link to="">LOGO</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/features">Featues</Link>
            </li>
            <li className="right">
              <Link to="/solutions" className="text">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="signup">signin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
