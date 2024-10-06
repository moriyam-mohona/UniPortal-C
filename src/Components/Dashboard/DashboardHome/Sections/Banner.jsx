import { FaSun } from "react-icons/fa";
import logo from "../../../../assets/Logo.png";
import { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";
const Banner = () => {
  const [currentDate, setCurrentDate] = useState("");

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const date = new Date();
    setCurrentDate(formatDate(date));
  }, []);

  return (
    <div className="bg-emerald rounded-lg w-full p-5 py-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-5 justify-between">
      <div className="flex gap-3 items-center">
        <img src={logo} alt="" className="w-12 h-12 lg:w-20 lg:h-20" />
        <div>
          <h3 className="text-white text-xl lg:text-3xl font-semibold">
            Welcome to Uni-Portal
          </h3>
          <p className="text-white text-sm lg:text-base flex items-center ">
            <FaSun className="mr-2 text-yellow" /> Have a Good day at work
          </p>
        </div>
      </div>
      <p className="text-white text-sm flex items-center gap-2">
        <TfiReload />
        Updated Recently on {currentDate}
      </p>
    </div>
  );
};

export default Banner;
