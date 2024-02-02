import Resturantmenu from "./components/content/resturantMenu";
import Features from "./components/content/features";
import Signup from "./components/content/signup";
import Blog from "./components/content/blog";
import App from "./App";

import {
  createBrowserRouter,
  Outlet,
  useRouteError,
  Navigate,
} from "react-router-dom";
import Authfailed from "./components/content/authFailed";
import { Suspense } from "react";

const Somethingwentwrong = () => {
  const routeError = useRouteError();
  // console.log(routeError, "error");
  return <h1>Something went wrong</h1>;
};
const auth = () => {
  return true;
};
const logErrorService = (error) => {
  console.log("error catched by eror boundary ", error);
};
const router = createBrowserRouter(
  [
    {
      path: "/",
      loader: () => {
        console.log("in loader");
        const msg = "hey from / loader";
        return msg;
      },
      element: (
        <>
          {auth() ? (
            <App />
          ) : (
            <Navigate
              to="/authfailed"
              replace={true}
              state={{ auth: "failed" }}
            />
          )}
        </>
      ),

      children: [
        {
          path: "/blog",
          element: (
            <>
              {/* <Blog /> */}
              <Outlet />
            </>
          ),
          children: [
            {
              index: true,
              element: <Blog />,
            },
            {
              path: "*",
              element: <Resturantmenu />,
            },
          ],
          errorElement: <Somethingwentwrong />,
        },
        {
          path: "/features",
          lazy: async () => {
            await import("./components/content/features");
          },
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Features />
            </Suspense>
          ),
        },
        { path: "/signup", element: <Signup /> },
      ],
      errorElement: <Somethingwentwrong />,
    },
    {
      path: "/authfailed",
      loader: ({ params }) => {
        console.log("in auth loader");
        console.log(params, "params");
        return null;
      },
      element: !auth() ? <Authfailed /> : <Navigate to="/" />,
    },
    {
      path: "*",
      element: <div>Default Page</div>,
    },
  ]
  // {
  //   basename: "/app",
  // }
);
export default router;
