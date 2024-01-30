import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/content/blog";
import Features from "./components/content/features";
import Solution from "./components/content/solutions";
import Signup from "./components/content/signup";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/blog", element: <Blog /> },
      { path: "/features", element: <Features /> },
      { path: "/solution", element: <Solution /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
