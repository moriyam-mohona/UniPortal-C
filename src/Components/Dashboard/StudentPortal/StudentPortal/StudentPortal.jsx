import Grades from "../Sections/Grades";
import StudentProfile from "../Sections/StudentProfile";
import StudentsCourses from "../Sections/StudentsCourses";
import UpcomingEvents from "../Sections/UpcomingEvents";

const StudentPortal = () => {
  return (
    <div className="space-y-5">
      <StudentProfile />
      <StudentsCourses />
      <Grades />
      <UpcomingEvents />
    </div>
  );
};

export default StudentPortal;
