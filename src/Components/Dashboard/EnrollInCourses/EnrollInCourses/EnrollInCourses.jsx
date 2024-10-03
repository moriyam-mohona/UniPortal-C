// const EnrollInCourses = () => {
//   return (
//     <div>
//       <h2>Enroll In Courses</h2>
//     </div>
//   );
// };

// export default EnrollInCourses;

import { useState } from "react";
import { motion } from "framer-motion";

const EnrollInCourses = () => {
  const [formData, setFormData] = useState({
    course: "",
    name: "",
    email: "",
    startDate: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = ["Mathematics", "Physics", "Computer Science", "History"];

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
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="course" className="block text-md font-semibold">
              Select Course:
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            >
              <option value="">--Select Course--</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {formErrors.course && (
              <p className="text-red-500 text-sm">{formErrors.course}</p>
            )}
          </div>

          <div>
            <label htmlFor="name" className="block text-md font-semibold">
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
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-semibold">
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
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="startDate" className="block text-md font-semibold">
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
              <p className="text-red-500 text-sm">{formErrors.startDate}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-emerald text-white p-2 rounded w-full mt-4"
          >
            Submit
          </button>
        </form>
      ) : (
        <motion.div
          className="bg-green-100 p-4 mt-4 rounded text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-green-700">
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
