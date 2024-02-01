import Resturantmenu from "./components/content/resturantMenu";
import Features from "./components/content/features";
import Signup from "./components/content/signup";
import Blog from "./components/content/blog";
import App from "./App";

import { createBrowserRouter, Outlet, useRouteError } from "react-router-dom";

const Somethingwentwrong = () => {
  const routeError = useRouteError();
  console.log(routeError, "error");
  return <h1>Something went wrong</h1>;
};

const logErrorService = (error) => {
  console.log("error catched by eror boundary ", error);
};
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <App />
        </>
      ),
      children: [
        {
          path: "/blog",
          element: (
            <>
              <Blog />
              <Outlet />
            </>
          ),
          children: [
            {
              path: "*",
              element: <Resturantmenu />,
            },
          ],
          errorElement: <Somethingwentwrong />,
        },
        { path: "/features", element: <Features /> },
        // { path: "/solution", element: <Carttotal /> },
        { path: "/signup", element: <Signup /> },
      ],
      errorElement: <Somethingwentwrong />,
    },
  ]
  // {
  //   onErrorBoundary: <Somethingwentwrong />,
  //   onError: logErrorService,
  // }
);
export default router;
