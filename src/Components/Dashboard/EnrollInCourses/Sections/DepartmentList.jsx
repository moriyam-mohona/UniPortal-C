import { motion } from "framer-motion";
const DepartmentList = ({ departments, onSelectDepartment }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {departments.map((department) => (
        <motion.div
          key={department}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer p-5 border rounded-lg shadow-md bg-white "
          onClick={() => onSelectDepartment(department)}
        >
          <h3 className="text-lg font-semibold text-emerald text-center">
            {department}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default DepartmentList;
