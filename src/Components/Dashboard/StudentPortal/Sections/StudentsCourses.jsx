import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import courseData from "../../../../assets/JsonFiles/CourseData.json";
import facultyData from "../../../../assets/JsonFiles/FacultyData.json";
import { Link } from "react-router-dom";

const StudentsCourses = () => {
  const [courses, setCourses] = useState([]);
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchCourses = () => {
      setCourses(courseData);
    };

    const fetchFaculties = () => {
      setFaculties(facultyData);
    };

    fetchCourses();
    fetchFaculties();
  }, []);

  return (
    <div className="bg-lightMoss shadow rounded p-4 pb-6">
      <h2 className="text-xl font-extrabold text-emerald px-1 lg:px-4 mb-3">
        Current Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {courses.map((course) => {
          const instructorDetails = faculties.find(
            (faculty) =>
              faculty.name.toLowerCase() === course.instructor.toLowerCase()
          );

          return (
            <motion.div
              key={course.id}
              className="p-5 border rounded-lg shadow-md bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={`/Dashboard/Course-Details/${course.id}`}
                className="text-base lg:text-lg font-bold text-emerald hover:underline"
              >
                {course.name}
              </Link>
              <p className="text-emerald text-sm">
                <span className="font-bold">Instructor</span>:{" "}
                {instructorDetails ? (
                  <Link
                    to={`/Dashboard/Faculty-Details/${instructorDetails.name}`}
                    className="text-emerald hover:underline"
                  >
                    {course.instructor}
                  </Link>
                ) : (
                  course.instructor
                )}
              </p>
              <p className="text-emerald text-sm">
                <span className="font-bold">Schedule</span>:{" "}
                {course.schedule.days.join(", ")}
              </p>
              <p className="text-emerald mb-2 text-sm">
                <span className="font-bold">Time</span>: {course.schedule.time}
              </p>
              <div className="flex items-center">
                <span className="text-emerald text-sm">
                  <span className="font-bold">Progress</span>:{" "}
                </span>
                <div className="w-36 h-2 bg-lightMoss ml-2">
                  <div
                    className="h-full bg-emerald text-sm"
                    style={{ width: course.progress }}
                  ></div>
                </div>
                <span className="ml-3 font-semibold text-emerald">
                  {course.progress}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsCourses;
