const DepartmentList = ({ departments, onSelectDepartment }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {departments.map((department) => (
        <div
          key={department}
          className="bg-blue-100 p-4 rounded shadow-md cursor-pointer"
          onClick={() => onSelectDepartment(department)}
        >
          <h3 className="text-lg font-semibold text-emerald">{department}</h3>
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
