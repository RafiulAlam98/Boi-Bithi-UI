import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";
import AllBooks from "../pages/AllBooks/AllBooks";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import BookDetails from "../pages/Homepage/BookDetails/BookDetails";
import AddNewBook from "../pages/AddNewBook/AddNewBook";
import PrivateRoutes from "./PrivateRoutes";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
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
    path: "add-book",
    element: (
      <PrivateRoutes>
        <AddNewBook />
      </PrivateRoutes>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
