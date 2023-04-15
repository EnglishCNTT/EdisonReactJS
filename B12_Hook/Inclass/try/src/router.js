import { Outlet, createBrowserRouter } from "react-router-dom";
import PostDetails from "./PostDetails";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/home",
        element: <div>Home</div>,
      },
      {
        path: "/aboutus",
        element: <div>About us</div>,
      },
      {
        path: "/post/:postId",
        element: <PostDetails />,
      },
    ],
  },
  // {
  //     path: '/',
  //     element: <div>Hello World</div>,
  // },

  // {
  //     path: '/aboutus',
  //     element: <div>About us</div>,
  // },

  // {
  //     path: '/contact',
  //     element: <div>Contact us</div>,
  // }
]);

export default router;
