import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import Login from "../Pages/Login/Login";
import StudentPortal from "../Dashboard/StudentPortal/StudentPortal/StudentPortal";
import FacultyOverview from "../Dashboard/FacultyOverview/FacultyOverview/FacultyOverview";
import EnrollInCourses from "../Dashboard/EnrollInCourses/EnrollInCourses/EnrollInCourses";
import CourseDetails from "../Dashboard/StudentPortal/Subsections/CourseDetails";
import FacultyDetails from "../Dashboard/FacultyOverview/FacultyDetails";
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
      { path: "/Dashboard/Student-Portal", element: <StudentPortal /> },
      { path: "/Dashboard/Faculty-Overview", element: <FacultyOverview /> },
      { path: "/Dashboard/Enroll-in-Courses", element: <EnrollInCourses /> },
      // -----------------------------------
      { path: "/Dashboard/Course-Details/:id", element: <CourseDetails /> },
      { path: "/Dashboard/Faculty-Details/:name", element: <FacultyDetails /> },
    ],
  },
]);
