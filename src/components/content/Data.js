import "./mainContainer.css";
import Cards from "../styling/cards";
import UseGetdata from "../utils/useGetdata";
import { useEffect, useState } from "react";

function Data() {
  const [items, setItems] = useState([]);
  const data = UseGetdata();
  useEffect(() => {
    setItems(data);
  }, [data]);
  return (
    <div className="main-container">
      {items.map((cards, i) => {
        return <Cards cards={cards} key={i} />;
      })}
    </div>
  );
}

export default Data;
