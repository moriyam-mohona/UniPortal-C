import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
