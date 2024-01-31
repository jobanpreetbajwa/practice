import React from "react";
import "./cards.css";
export default function Cards(props) {
  // throw new Error("from Cards");
  return (
    <div className="card">
      <h2>id:{props.cards?.id}</h2>
      <h2>userId:{props.cards?.userId}</h2>
    </div>
  );
}
