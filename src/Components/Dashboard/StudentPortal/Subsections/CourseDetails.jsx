import { useParams, useNavigate } from "react-router-dom";
import courseData from "../../../../assets/JsonFiles/CourseData.json";
import { IoArrowBack } from "react-icons/io5";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData.find((course) => course.id === parseInt(id));

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Course not found.
      </div>
    );
  }

  return (
    <div className="">
      <div className="mx-auto p-6 md:p-8 lg:p-14 w-full bg-white rounded-lg shadow-lg  min-h-screen">
        <button
          onClick={() => navigate("/Dashboard/Student-Portal")}
          className="mb-4 px-4 py-2 bg-emerald text-white rounded hover:bg-emerald-dark transition duration-300"
        >
          <IoArrowBack />
        </button>
        <h1 className="text-3xl font-bold text-emerald mb-4">{course.name}</h1>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-emerald">Instructor:</strong>{" "}
          {course.instructor}
        </p>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-emerald">Schedule:</strong>{" "}
          {course.schedule.days.join(", ")} at {course.schedule.time}
        </p>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-emerald">Description:</strong>{" "}
          {course.description}
        </p>
        <p className="text-sm md:text-base mb-2">
          <strong className="text-emerald">Credits:</strong> {course.credits}
        </p>
        <h2 className="text-xl text-emerald font-bold mt-6 mb-2">Syllabus:</h2>
        <ul className="list-disc list-inside space-y-1">
          {course.syllabus.map((item, index) => (
            <li key={index} className="text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
