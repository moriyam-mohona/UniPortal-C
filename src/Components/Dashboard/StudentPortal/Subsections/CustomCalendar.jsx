import { useState } from "react";
import { format } from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  const handleDayClick = (day) => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1)
            )
          }
          className="text-base font-semibold text-emerald"
        >
          <FaChevronLeft />
        </button>
        <h3 className="text-lg font-semibold text-emerald">
          {format(selectedDate, "MMMM yyyy")}
        </h3>
        <button
          onClick={() =>
            setSelectedDate(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1)
            )
          }
          className="text-base font-semibold text-emerald"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="font-semibold text-emerald">
            {day}
          </div>
        ))}
        {[...Array(daysInMonth).keys()].map((day) => {
          const isSelected =
            selectedDate.getDate() === day + 1 &&
            selectedDate.getMonth() === new Date().getMonth();

          return (
            <div
              key={day}
              onClick={() => handleDayClick(day + 1)}
              className={`py-1 rounded-full cursor-pointer text-sm ${
                isSelected
                  ? "bg-lightMoss text-emerald font-semibold"
                  : "text-emerald"
              } hover:bg-emerald hover:text-white`}
            >
              {day + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
