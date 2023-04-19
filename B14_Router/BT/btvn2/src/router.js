import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/home",
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;