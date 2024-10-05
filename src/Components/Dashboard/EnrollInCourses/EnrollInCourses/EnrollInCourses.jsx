import { useState, useEffect } from "react";
import courseData from "../../../../assets/JsonFiles/CourseDetails.json";
import { motion } from "framer-motion";

const EnrollInCourses = () => {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    const fetchCourses = () => {
      setCourses(courseData);
    };

    fetchCourses();
  }, []);

  const [formData, setFormData] = useState({
    course: "",
    name: "",
    email: "",
    startDate: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let errors = {};
    if (!formData.course) errors.course = "Course is required.";
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.startDate) errors.startDate = "Start date is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-emerald">Enroll in Courses</h1>
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label
                htmlFor="course"
                className="block text-md font-semibold text-emerald"
              >
                Select Course:
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="w-full border rounded p-2 text-emerald"
              >
                <option value="">--Select Course--</option>
                {/* General Courses */}
                {courses.generalCourses && (
                  <optgroup label="General Courses">
                    {Object.keys(courses.generalCourses).map(
                      (course, index) => (
                        <option key={index} value={course}>
                          {course}
                        </option>
                      )
                    )}
                  </optgroup>
                )}
                {/* CSE Courses */}
                {courses.cseCourses && (
                  <optgroup label="CSE Courses">
                    {Object.keys(courses.cseCourses).map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
              {formErrors.course && (
                <p className="text-red text-sm">{formErrors.course}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-base font-semibold text-emerald"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
              {formErrors.name && (
                <p className="text-red text-sm">{formErrors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-semibold text-emerald"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
              {formErrors.email && (
                <p className="text-red text-sm ">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="startDate"
                className="block text-sm md:text-base font-semibold text-emerald"
              >
                Preferred Start Date:
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full border rounded p-2"
              />
              {formErrors.startDate && (
                <p className="text-red text-sm">{formErrors.startDate}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-emerald text-white p-2 rounded w-full mt-4"
            >
              Submit
            </button>
          </form>

          {/* Show detailed course info */}
          {/* ... */}
          {formData.course && (
            <motion.div
              className="bg-blue-100 p-4 mt-4 rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-emerald">
                Course Details
              </h3>

              <p className="mt-2 text-sm md:text-base">
                <strong className="text-emerald  ">Description:</strong>{" "}
                {(courses.generalCourses?.[formData.course] &&
                  courses.generalCourses[formData.course].description) ||
                  (courses.cseCourses?.[formData.course] &&
                    courses.cseCourses[formData.course].description)}
              </p>

              <p className="mt-1 text-sm md:text-base">
                <strong className="text-emerald text-sm md:text-base ">
                  Schedule:
                </strong>{" "}
                {(courses.generalCourses?.[formData.course] &&
                  courses.generalCourses[formData.course].schedule) ||
                  (courses.cseCourses?.[formData.course] &&
                    courses.cseCourses[formData.course].schedule)}
              </p>

              <p className="mt-1 text-sm md:text-base">
                <strong className="text-emerald text-sm md:text-base ">
                  Prerequisites:
                </strong>{" "}
                {(courses.generalCourses?.[formData.course] &&
                  courses.generalCourses[formData.course].prerequisites) ||
                  (courses.cseCourses?.[formData.course] &&
                    courses.cseCourses[formData.course].prerequisites)}
              </p>

              <p className="mt-1 text-sm md:text-base">
                <strong className="text-emerald text-sm md:text-base ">
                  Syllabus:
                </strong>{" "}
                {(courses.generalCourses?.[formData.course] &&
                  courses.generalCourses[formData.course].syllabus.join(
                    ", "
                  )) ||
                  (courses.cseCourses?.[formData.course] &&
                    courses.cseCourses[formData.course].syllabus.join(", "))}
              </p>
            </motion.div>
          )}
          {/* ... */}
        </>
      ) : (
        <motion.div
          className="bg-green-100 p-4 mt-4 rounded text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-emerald">
            Enrollment Successful!
          </h2>
          <p className="text-md mt-2">
            Thank you for enrolling in {formData.course}.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default EnrollInCourses;
