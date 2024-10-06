import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import facultyData from "../../../../assets/JsonFiles/FacultyData.json";
import { Link } from "react-router-dom";

const FacultyOverview = () => {
  const [faculties, setFaculties] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const departments = [
    ...new Set(facultyData.map((faculty) => faculty.department)),
  ];

  useEffect(() => {
    const fetchFaculties = () => {
      setFaculties(facultyData);
    };

    fetchFaculties();
  }, []);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="bg-lightMoss shadow rounded p-4 pb-6">
      <h2 className="text-xl font-extrabold text-emerald px-1 lg:px-4 mb-3">
        Faculty Overview
      </h2>

      <div className="mb-4 flex flex-wrap">
        {departments.map((department, index) => (
          <button
            key={index}
            onClick={() => handleDepartmentClick(department)}
            className="mr-2 mb-2 px-4 py-2 bg-emerald text-white rounded hover:bg-emerald/50  hover:font-semibold flex-1 min-w-[120px] sm:min-w-[150px] text-center"
          >
            {department}
          </button>
        ))}
      </div>

      {/* Search faculty name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Faculty Name..."
          className="border rounded p-2 w-full"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {faculties
          .filter((faculty) =>
            selectedDepartment
              ? faculty.department === selectedDepartment
              : true
          )
          .filter((faculty) =>
            faculty.name.toLowerCase().includes(searchItem.toLowerCase())
          )
          .map((faculty) => (
            <motion.div
              key={faculty.id}
              className="p-5 border rounded-lg shadow-md bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={`/Dashboard/Faculty-Details/${faculty.name}`}
                className="text-base lg:text-lg font-bold text-emerald hover:underline"
              >
                {faculty.name}
              </Link>
              <p className="text-emerald text-sm">
                <span className="font-bold">Department</span>:{" "}
                {faculty.department}
              </p>
              <p className="text-emerald text-sm">
                <span className="font-bold">Courses</span>:{" "}
                {faculty.courses.join(", ")}
              </p>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default FacultyOverview;
