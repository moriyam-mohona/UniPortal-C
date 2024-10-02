import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import courseData from "../../../../assets/JsonFiles/CourseData.json";
import { Link } from "react-router-dom";

const StudentsCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = () => {
      setCourses(courseData);
    };

    fetchCourses();
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl font-extrabold mb-8 text-emerald text-center">
        Current Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-10">
        {courses.map((course) => (
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
              className="text-lg lg:text-xl font-bold text-emerald hover:underline"
            >
              {course.name}
            </Link>
            <p className="text-emerald">
              <span className="font-bold">Instructor</span>: {course.instructor}
            </p>
            <p className="text-emerald mb-2">
              <span className="font-bold">Schedule</span>: {course.schedule}
            </p>
            <div className="flex items-center">
              <span className="text-emerald">
                <span className="font-bold">Progress</span>:{" "}
              </span>
              <div className="w-36 h-2 bg-lightMoss ml-2">
                <div
                  className="h-full bg-emerald"
                  style={{ width: course.progress }}
                ></div>
              </div>
              <span className="ml-3 font-semibold text-emerald">
                {course.progress}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentsCourses;
