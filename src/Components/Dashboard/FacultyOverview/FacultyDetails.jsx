import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import facultyData from "../../../assets/JsonFiles/FacultyData.json";
import { IoArrowBack } from "react-icons/io5";

const FacultyDetails = () => {
  const { name } = useParams();
  const [faculty, setFaculty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundFaculty = facultyData.find((faculty) => faculty.name === name);
    setFaculty(foundFaculty);
  }, [name]);

  if (!faculty) {
    return (
      <p className="text-center text-xl text-emerald">
        Loading faculty details...
      </p>
    );
  }

  return (
    <div className="bg-lightMoss p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-emerald text-white rounded hover:bg-darkMoss"
      >
        <IoArrowBack />
      </button>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-3xl font-extrabold text-emerald mb-4">
          {faculty.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-emerald">
          <p>
            <strong>Department:</strong> {faculty.department}
          </p>
          <p>
            <strong>Courses:</strong> {faculty.courses.join(", ")}
          </p>
          <p>
            <strong>Email:</strong> {faculty.email}
          </p>
          <p>
            <strong>Contact:</strong> {faculty.contact}
          </p>
          <p>
            <strong>Education:</strong> {faculty.education}
          </p>
          <p>
            <strong>Research:</strong> {faculty.research}
          </p>
          <p>
            <strong>Office:</strong> {faculty.office}
          </p>
          <p>
            <strong>Office Hours:</strong> {faculty.officeHours}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
