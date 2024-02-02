import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Resturantmenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(location.state.id);
  }, []);
  console.log("hello");
  return (
    <div>
      Resturantmenu Id:{id}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
    </div>
  );
}
