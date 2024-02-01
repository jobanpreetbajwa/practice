import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import Auth from "./components/store/auth";
import Carttotal from "./components/content/cartTotal";
import Cart from "./components/store/cartContext";
export default function Navbar() {
  const cartcxt = useContext(Cart);
  const authcxt = useContext(Auth);
  const navigate = useNavigate();
  const tokenHandler = () => {
    authcxt.setToken(true);
    navigate("/blog", { replace: true });
  };
  const cartHandler = () => {
    cartcxt.update((prev) => {
      return prev + 10;
    });
    alert(cartcxt.total);
    // console.log("hello");
    // const element = document.getElementById("App");
    // createPortal(<Carttotal />, element);
  };
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
              <Link to="/features">Featuers</Link>
            </li>
            <li className="right">
              <button className="text" onClick={cartHandler}>
                cart
              </button>
            </li>
            <li>
              <Link to="signup" onClick={tokenHandler}>
                signin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
