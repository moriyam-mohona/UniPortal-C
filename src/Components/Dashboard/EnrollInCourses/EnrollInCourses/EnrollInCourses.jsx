import { useState, useEffect } from "react";
import courseData from "../../../../assets/JsonFiles/CourseDetails.json";
import DepartmentList from "../Sections/DepartmentList";
import CourseList from "../Sections/CourseList";
import EnrollForm from "../Sections/EnrollForm";
import { motion } from "framer-motion";

const EnrollInCourses = () => {
  const [courses, setCourses] = useState({});
  const [formData, setFormData] = useState({
    course: "",
    name: "",
    email: "",
    startDate: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    setCourses(courseData);
  }, []);

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email format should be example@domain.com.";
    }
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.semester) errors.semester = "Semester is required.";
    if (!formData.batchNumber) errors.batchNumber = "Batch number is required.";
    if (!formData.session) errors.session = "Session is required.";
    if (!formData.startDate) errors.startDate = "Start date is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setSelectedCourse("");
    setFormData({ course: "", name: "", email: "", startDate: "" });
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setFormData({ ...formData, course });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const getCoursesForSelectedDepartment = () => {
    return selectedDepartment
      ? courses[selectedDepartment.toLowerCase() + "Courses"]
      : {};
  };

  return (
    <div className="bg-lightMoss shadow rounded p-4 pb-6">
      <h2 className="text-xl font-extrabold text-emerald mb-3">
        Enroll In Courses
      </h2>
      {!isSubmitted ? (
        <>
          {!selectedDepartment ? (
            <DepartmentList
              departments={["General", "CSE", "EEE", "Civil"]}
              onSelectDepartment={handleDepartmentSelect}
            />
          ) : (
            <>
              <CourseList
                courses={getCoursesForSelectedDepartment()}
                onSelectCourse={handleCourseSelect}
              />
              {selectedCourse && (
                <EnrollForm
                  formData={formData}
                  setFormData={setFormData}
                  handleSubmit={handleSubmit}
                  formErrors={formErrors}
                />
              )}
            </>
          )}
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
