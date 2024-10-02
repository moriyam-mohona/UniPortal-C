import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-emerald p-10">
      <Outlet />
    </div>
  );
};
export default Main;
