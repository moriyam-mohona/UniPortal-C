import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import studentActivities from "../../../../assets/JsonFiles/StudentActivity.json";

const StudentActivity = () => {
  return (
    <div className="bg-white/60 rounded-lg shadow-md p-3 w-full">
      <h2 className="text-xl font-extrabold text-emerald mb-3">
        Student Activity
      </h2>

      <div className="flex flex-col justify-between gap-3">
        {studentActivities.map((activity) => (
          <motion.div
            key={activity.id}
            className="bg-white/60 flex items-start border p-2 rounded-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-sm mr-3 bg-lightMoss p-1 rounded-full">
              {activity.icon}
            </span>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-emerald">
                {activity.title}
              </h3>
              <p className="text-xs text-emerald">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-right">
        <Link className="text-emerald hover:underline text-sm font-bold">
          View More
        </Link>
      </div>
    </div>
  );
};

export default StudentActivity;
