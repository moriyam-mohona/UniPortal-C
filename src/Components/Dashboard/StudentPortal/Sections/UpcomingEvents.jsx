import { useEffect, useState } from "react";
import { MdEventNote, MdOutlineEventBusy } from "react-icons/md";
import CustomCalendar from "../Subsections/CustomCalendar";
import { motion } from "framer-motion";
import eventData from "../../../../assets/JsonFiles/Events.json";
import { IoMdTime } from "react-icons/io";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      setEvents(eventData);
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col gap-5 md:gap-1 lg:gap-0 items-start md:flex-row">
      {/* Calendar */}
      <div className="w-full md:w-1/3 rounded-xl">
        <CustomCalendar />
      </div>

      {/* Events */}
      <div className="w-full md:w-2/3 px-1 lg:px-4 py-1 space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-lg p-2 flex justify-between items-start border-l-4 border-emerald"
          >
            <MdEventNote className="text-3xl mr-4 text-emerald hidden lg:flex" />

            <div className="flex-1">
              <h3 className="font-semibold text-sx lg:text-lg text-emerald">
                {event.title}
              </h3>

              <p className="text-xs lg:text-sm text-emerald">
                {event.description}
              </p>
              <p className="text-xs text-emerald flex mt-2 gap-1 items-center">
                <MdOutlineEventBusy />
                {event.date} {event.time}
              </p>
            </div>
            <div className="ml-4 flex flex-col items-end gap-4">
              <button
                className={`mt-2 px-3 py-1 rounded-full text-xs font-bold ${
                  event.status === "Incomplete"
                    ? "bg-red/40 text-red"
                    : "bg-lightMoss text-emerald"
                }`}
              >
                {event.status}
              </button>
              <div>
                <p className="text-xs text-emerald flex gap-1 items-center"></p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
