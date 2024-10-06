import { useState, useEffect } from "react";
import CoursesData from "../../../../assets/JsonFiles/CourseData.json";

const TodaysClass = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [todayClasses, setTodayClasses] = useState([]);

  useEffect(() => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    setCurrentDate(date.toLocaleDateString(undefined, options));

    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = dayNames[date.getDay()];

    const todaysClasses = CoursesData.filter((course) =>
      course.schedule.days.includes(today)
    );
    setTodayClasses(todaysClasses);
  }, []);

  return (
    <div className="bg-white/70 shadow rounded p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-extrabold text-emerald text-center">
          Today's Classes
        </h2>
        <strong className="text-emerald text-sm">{currentDate}</strong>
      </div>

      {todayClasses.length > 0 ? (
        todayClasses.map((course, index) => (
          <div
            key={index}
            className="flex items-center p-3 border rounded mb-3 bg-white/60 shadow"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-emerald text-sm lg:text-base">
                {course.name}
              </h3>
              <p className="text-sm text-emerald">
                {course.schedule.time} <br /> <strong>Instructor:</strong>{" "}
                {course.instructor}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No classes today.</p>
      )}
    </div>
  );
};

export default TodaysClass;
