import StudentProfile from "../Sections/StudentProfile";
import StudentsCourses from "../Sections/StudentsCourses";

const StudentPortal = () => {
  return (
    <div className="space-y-5">
      <StudentProfile />
      <StudentsCourses />
    </div>
  );
};

export default StudentPortal;
