import React, { useContext } from "react";
import Cart from "../store/cartContext";
export default function Features() {
  const cartctx = useContext(Cart);
  console.log(cartctx.total, "in features");
  return <div>Total amount:{cartctx.total}</div>;
}
