import { useState } from "react";
import { motion } from "framer-motion";
import gradesData from "../../../../assets/JsonFiles/Grades.json";

const Grades = () => {
  const [expandedSemester, setExpandedSemester] = useState(null);

  const toggleSemester = (semester) => {
    setExpandedSemester(expandedSemester === semester ? null : semester);
  };

  const calculateTotalGPA = (results) => {
    const totalCredits = results.reduce(
      (acc, course) => acc + course.credit,
      0
    );
    const totalPoints = results.reduce(
      (acc, course) => acc + course.gpa * course.credit,
      0
    );
    return totalPoints / totalCredits;
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold mb-8 text-emerald text-center">
        Result
      </h2>
      {gradesData.map((semesterData, index) => (
        <div key={index} className="mb-3">
          <div
            className="cursor-pointer bg-lightMoss  p-3 lg:p-4 rounded-lg shadow-md"
            onClick={() => toggleSemester(semesterData.semester)}
          >
            <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-emerald">
              {semesterData.semester}
            </h3>
          </div>
          {expandedSemester === semesterData.semester && (
            <motion.div
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-lightMoss">
                      <th className="border px-4 py-2 text-sm lg:text-base text-emerald">
                        Subject
                      </th>
                      <th className="border px-4 py-2 text-sm lg:text-base text-emerald">
                        Credit
                      </th>
                      <th className="border px-4 py-2 text-sm lg:text-base text-emerald">
                        GPA
                      </th>
                      <th className="border px-4 py-2 text-sm lg:text-base text-emerald">
                        Result
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {semesterData.results.map((result, idx) => (
                      <tr
                        key={idx}
                        className={
                          result.result === "Pass"
                            ? "bg-white"
                            : "bg-red text-white"
                        }
                      >
                        <td className="border px-4 py-2 text-sm">
                          {result.subject}
                        </td>
                        <td className="border px-4 py-2 text-sm">
                          {result.credit}
                        </td>
                        <td className="border px-4 py-2 text-sm">
                          {result.gpa}
                        </td>
                        <td className="border px-4 py-2 text-sm">
                          {result.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row justify-end gap-5">
                <p className="font-semibold text-sm lg:text-base text-emerald">
                  Total GPA:{" "}
                  {calculateTotalGPA(semesterData.results).toFixed(2)}
                </p>
                <p className="font-semibold text-sm lg:text-base text-emerald">
                  Total Credits:{" "}
                  {semesterData.results.reduce(
                    (acc, course) => acc + course.credit,
                    0
                  )}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </>
  );
};

export default Grades;
