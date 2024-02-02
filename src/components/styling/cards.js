import React, { useContext } from "react";
import "./cards.css";
import { useNavigate } from "react-router-dom";
import Cart from "../store/cartContext";
export default function Cards(props) {
  const cartctx = useContext(Cart);
  const navigate = useNavigate();
  // throw new Error("from Cards");
  const navigateHandler = (e) => {
    navigate(`${e.target.querySelector("span").innerText}`, {
      state: {
        data: "data from card to resturo",
        id: `${e.target.querySelector("span").innerText}`,
      },
    });
  };
  const addTocart = (e) => {
    e.stopPropagation();
    const price = +e.target.innerText.slice(1);
    cartctx.update((prev) => {
      return prev + price;
    });
  };
  return (
    <div className="card" onClick={navigateHandler}>
      <h2>id:</h2>
      <span>{props.cards?.id}</span>
      <h2>userId:{props.cards?.userId}</h2>
      <button onClick={addTocart}>$10</button>
    </div>
  );
}
