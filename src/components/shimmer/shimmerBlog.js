import React, { useEffect, useState } from "react";
import Cards from "../styling/cards";
import "./shimmerBlog.css";
export default function ShimmerBlog() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Array(8).fill(1));
  }, []);

  return (
    <div className="shimmer-container">
      {items.map((card, i) => {
        return <Cards cards key={i} />;
      })}
    </div>
  );
}
