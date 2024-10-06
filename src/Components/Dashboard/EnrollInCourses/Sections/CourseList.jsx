const CourseList = ({ courses, onSelectCourse }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.keys(courses).map((course) => (
        <div
          key={course}
          className="bg-blue-100 p-4 rounded shadow-md cursor-pointer"
          onClick={() => onSelectCourse(course)}
        >
          <h3 className="text-lg font-semibold text-emerald">{course}</h3>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
