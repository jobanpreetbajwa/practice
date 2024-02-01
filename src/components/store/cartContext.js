import React from "react";

const Cart = React.createContext({
  total: 0,
  update: () => {},
  reduce: () => {},
});

export default Cart;
