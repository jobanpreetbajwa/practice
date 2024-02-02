import React, { useContext, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./app.css";
import { Outlet } from "react-router-dom";
import Auth from "./components/store/auth";
import Login from "./components/login/login";
import { useLoaderData } from "react-router-dom";
export default function App() {
  const loaderData = useLoaderData();
  console.log(loaderData, "loaderData");
  const [token, setToken] = useState(false);

  const [login, setLogin] = useState(true);

  return (
    <>
      {!login && <Login />}
      {login && (
        <div>
          <Auth.Provider value={{ token: token, setToken }}>
            <Navbar />
            <div className="middle-container">
              <div className="left-div">
                <Sidebar />
              </div>
              <div className="right-div">{token && <Outlet />}</div>
            </div>
          </Auth.Provider>
        </div>
      )}
    </>
  );
}
