import Grades from "../Sections/Grades";
import StudentProfile from "../Sections/StudentProfile";
import StudentsCourses from "../Sections/StudentsCourses";
import UpcomingEvents from "../Sections/UpcomingEvents";

const StudentPortal = () => {
  return (
    <div className="space-y-5">
      <StudentProfile />
      <StudentsCourses />
      <div className="flex flex-col md:flex-row items-start gap-5">
        <div className="w-full md:w-1/2 lg:w-2/3">
          <Grades />
        </div>{" "}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <UpcomingEvents />
        </div>{" "}
      </div>
    </div>
  );
};

export default StudentPortal;
