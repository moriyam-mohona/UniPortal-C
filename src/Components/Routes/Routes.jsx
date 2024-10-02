import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import Login from "../Pages/Login/Login";
import StudentPortal from "../Dashboard/StudentPortal/StudentPortal/StudentPortal";
import FacultyOverview from "../Dashboard/FacultyOverview/FacultyOverview/FacultyOverview";
import EnrollInCourses from "../Dashboard/EnrollInCourses/EnrollInCourses/EnrollInCourses";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/Dashboard/StudentPortal", element: <StudentPortal /> },
      { path: "/Dashboard/FacultyOverview", element: <FacultyOverview /> },
      { path: "/Dashboard/EnrollInCourses", element: <EnrollInCourses /> },
    ],
  },
]);
