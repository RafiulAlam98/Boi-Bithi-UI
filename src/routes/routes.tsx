import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import AllBooks from "../pages/AllBooks/AllBooks";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/all-books",
    element: <AllBooks />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
