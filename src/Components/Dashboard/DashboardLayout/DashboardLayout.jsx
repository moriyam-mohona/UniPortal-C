import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import bg from "../../../assets/background.jpg";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 bottom-0 left-0 z-50 bg-emerald">
        <Sidebar />
      </div>
      <div
        className="flex-1 p-2 ml-16 md:p-5 lg:p-10 min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
