// const FacultyOverview = () => {
//   return (
//     <div>
//       <h2>Faculty Overview</h2>
//     </div>
//   );
// };

// export default FacultyOverview;

import { useState } from "react";
import { motion } from "framer-motion";

const FacultyOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const facultyList = [
    {
      name: "Dr. Alice Smith",
      designation: "Professor",
      subject: "Mathematics",
      officeHours: "Mon-Fri: 10 AM - 12 PM",
      contact: "alice@example.com",
    },
    {
      name: "Mr. John Doe",
      designation: "Lecturer",
      subject: "Physics",
      officeHours: "Tue-Thu: 1 PM - 3 PM",
      contact: "john@example.com",
    },
    // Add more faculty members
  ];

  const filteredFaculty = facultyList.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFacultyClick = (faculty) => {
    setSelectedFaculty(selectedFaculty === faculty ? null : faculty);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-extrabold text-emerald text-center px-1 lg:px-4 mb-3">
        Faculty Overview
      </h2>
      <input
        type="text"
        placeholder="Search Faculty"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mt-2 mb-4"
      />
      <ul className="space-y-2">
        {filteredFaculty.map((faculty, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            onClick={() => handleFacultyClick(faculty)}
          >
            <h2 className="font-semibold text-lg text-emerald">
              {faculty.name} - {faculty.designation} - {faculty.subject}
            </h2>
            {selectedFaculty === faculty && (
              <div className="mt-2">
                <p>Office Hours: {faculty.officeHours}</p>
                <p>Contact: {faculty.contact}</p>
              </div>
            )}
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default FacultyOverview;
