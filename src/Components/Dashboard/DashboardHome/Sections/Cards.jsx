import { motion } from "framer-motion";
import student from "../../../../assets/Student.png";
import teacher from "../../../../assets/Teacher.png";
import staff from "../../../../assets/Staff.png";
import subject from "../../../../assets/Subject.png";

const Cards = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
      {/* Card-1 */}
      <motion.div
        className="w-full flex flex-col gap-3 bg-white/60 shadow-lg border rounded-md px-5 py-2 transition-transform transform hover:scale-105 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex gap-3 items-center">
          <img src={student} alt="" className="w-16 h-16" />
          <div>
            <h2 className="text-xl font-extrabold text-emerald">1234</h2>
            <p className="text-sm text-emerald">Total Students</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between text-sm text-emerald">
          <p>
            Active: <strong>1200</strong>
          </p>
          <p>
            Inactive: <strong>34</strong>
          </p>
        </div>
      </motion.div>

      {/* Card-2 */}
      <motion.div
        className="w-full flex flex-col gap-3 bg-white/60 shadow-lg border rounded-md px-5 py-2 transition-transform transform hover:scale-105 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex gap-3 items-center">
          <img src={teacher} alt="" className="w-16 h-16" />
          <div>
            <h2 className="text-xl font-extrabold text-emerald">50</h2>
            <p className="text-sm text-emerald">Total Teachers</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between text-sm text-emerald">
          <p>
            Active: <strong>45</strong>
          </p>
          <p>
            Inactive: <strong>5</strong>
          </p>
        </div>
      </motion.div>

      {/* Card-3 */}
      <motion.div
        className="w-full flex flex-col gap-3 bg-white/60 shadow-lg border rounded-md px-5 py-2 transition-transform transform hover:scale-105 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex gap-3 items-center">
          <img src={staff} alt="" className="w-16 h-16" />
          <div>
            <h2 className="text-xl font-extrabold text-emerald">34</h2>
            <p className="text-sm text-emerald">Total Staff's</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between text-sm text-emerald">
          <p>
            Active: <strong>30</strong>
          </p>
          <p>
            Inactive: <strong>4</strong>
          </p>
        </div>
      </motion.div>

      {/* Card-4 */}
      <motion.div
        className="w-full flex flex-col gap-3 bg-white/60 shadow-lg border rounded-md px-5 py-2 transition-transform transform hover:scale-105 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex gap-3 items-center">
          <img src={subject} alt="" className="w-16 h-16" />
          <div>
            <h2 className="text-xl font-extrabold text-emerald">12</h2>
            <p className="text-sm text-emerald">Total Department</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between text-sm text-emerald">
          <p>
            Active: <strong>9</strong>
          </p>
          <p>
            Inactive: <strong>3</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
