import Banner from "./Sections/Banner";
import Cards from "./Sections/Cards";
import Notice from "./Sections/Notice";
import StudentActivity from "./Sections/StudentActivity";
import Todo from "./Sections/Todo";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <Banner />
      <Cards />
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
        <Notice />
        <StudentActivity />
        <Todo />
      </div>
    </div>
  );
};

export default Dashboard;
