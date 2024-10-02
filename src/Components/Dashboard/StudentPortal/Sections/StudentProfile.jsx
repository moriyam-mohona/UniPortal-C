import { FaRegEdit } from "react-icons/fa";
import cover from "../../../../assets/cover.png";
import profile from "../../../../assets/student1.jpg";

const studentData = {
  id: "ST1234546",
  name: "Angelo Riana",
  class: "III",
  section: "C",
  rollNo: "36545",
  image: profile,
  result: {
    exam: "1st Quarterly",
    status: "Pass",
  },
};

const StudentProfile = () => {
  return (
    <div className="relative bg-cover bg-center h-60 w-full">
      <img
        src={cover}
        alt="Cover"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>

      <div className="absolute top-6 lg:top-8 left-3 lg:left-10 flex gap-3 items-center space-x-4 p-1 md:p-3">
        <img
          src={studentData.image}
          alt="Student"
          className="w-24 h-24 rounded-4xl border-4 border-white object-cover"
        />
        <div className="text-white space-y-1">
          <span className="bg-lightMoss text-sm text-emerald font-bold px-2 py-1 rounded-lg">
            #{studentData.id}
          </span>
          <h2 className="text-2xl font-semibold">{studentData.name}</h2>
          <p>
            <span className="font-bold"> Class:</span> {studentData.class},{" "}
            {studentData.section} | <span className="font-bold">Roll No:</span>{" "}
            {studentData.rollNo}
          </p>
        </div>
      </div>
      {/* Edit button  */}
      <button className="absolute top-6 right-6 text-white text-xl">
        <FaRegEdit />
      </button>

      {/* Result */}
      <div className="absolute bottom-4 left-3 lg:left-10 right-3 lg:right-10 text-white">
        <div className="border-t-2 border-dotted border-white opacity-70 w-full mb-4"></div>

        <div className="flex items-center space-x-2">
          <span>{studentData.result.exam}</span>
          <span
            className={`px-2 py-1 rounded-lg text-sm ${
              studentData.result.status === "Pass"
                ? "bg-lightMoss text-emerald font-bold"
                : "bg-red text-white"
            }`}
          >
            {studentData.result.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
