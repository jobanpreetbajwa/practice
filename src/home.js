import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import App from "./App";
import Cart from "./components/store/cartContext";
export default function Home() {
  const [cart, setCart] = useState(0);
  return (
    <Cart.Provider value={{ total: cart, update: setCart, reduce: setCart }}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Cart.Provider>
  );
}
