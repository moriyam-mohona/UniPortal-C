import { motion } from "framer-motion";
import {
  FaBars,
  FaHome,
  FaTimes,
  FaUniversity,
  FaUserGraduate,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { SiStudyverse } from "react-icons/si";

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { pathname } = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/Dashboard", icon: <FaHome /> },
    {
      name: "Student Portal",
      path: "/Dashboard/Student-Portal",
      icon: <FaUserGraduate />,
    },
    {
      name: "Faculty Overview",
      path: "/Dashboard/Faculty-Overview",
      icon: <FaUniversity />,
    },
    {
      name: "Enroll In Courses",
      path: "/Dashboard/Enroll-in-Courses",
      icon: <SiStudyverse />,
    },
  ];

  return (
    <div>
      <motion.div
        className={`w-16 bg-emerald h-full min-h-screen text-white transition-all duration-300`}
      >
        <div className="items-center justify-between p-4">
          <div onClick={handleClick} className="z-50 bg-emerald">
            {!nav ? (
              <FaBars className="w-6 h-6 text-white" />
            ) : (
              <div className="absolute top-0 w-[272px] h-full bg-emerald">
                <div className="flex items-center">
                  <FaTimes className="w-6 h-6 mt-3 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>

        <ul className="mt-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative my-1">
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 hover:text-white${
                  pathname === item.path ? "text-white" : ""
                }`}
              >
                <span className={`text-xl mr-2`}>{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Mobile Menu */}
      <motion.ul
        className={
          !nav
            ? "hidden"
            : "absolute z-40 top-16 pt-3 left-0 w-72 h-screen bg-emerald text-white flex-col flex justify-start"
        }
        initial={{ x: "-100%" }}
        animate={{ x: nav ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="relative w-full my-1 text-2xl hover:text-white"
            animate="mobileVisible"
            variant="outlined"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotateX: 5, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 100, damping: 7 }}
          >
            <Link
              to={item.path}
              className={`flex items-center px-4 py-2 hover:text-white ${
                pathname === item.path ? "text-white" : ""
              }`}
              onClick={() => setNav(false)}
            >
              <span className={`text-xl mr-2`}>{item.icon}</span>
              <span className={`text-base mr-4`}>{item.name}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Sidebar;
