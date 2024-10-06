import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import notices from "../../../../assets/JsonFiles/Notices.json";

const Notice = () => {
  return (
    <div className="bg-white/60 rounded-lg shadow-md p-3 w-full">
      <h2 className="text-xl font-extrabold text-emerald mb-3">Notice Board</h2>

      <div className="flex flex-col gap-3">
        {notices.map((notice) => (
          <motion.div
            key={notice.id}
            className="bg-white/60 flex items-start border p-2 rounded-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-sm mr-3 bg-lightMoss p-1 rounded-full">
              {notice.icon}
            </span>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-emerald">
                {notice.title}
              </h3>
              <p className="text-xs text-emerald">Added on: {notice.date}</p>
            </div>
            <span className="text-xs bg-lightMoss/50 p-1 rounded-md text-emerald">
              {notice.daysAgo}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-right">
        <Link className="text-emerald hover:underline text-sm font-bold">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Notice;
