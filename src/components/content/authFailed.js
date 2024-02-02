import React from "react";
import { useLocation } from "react-router-dom";
export default function Authfailed() {
  const location = useLocation();
  //   console.log(location, "location");
  return <div>you are not allowed to access</div>;
}
