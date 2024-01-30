import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./app.css";
import { Outlet } from "react-router-dom";
export default function App() {
  console.log("App");
  return (
    <div>
      <Navbar />
      <div className="middle-container">
        <div className="left-div">
          <Sidebar />
        </div>
        <div className="right-div">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
