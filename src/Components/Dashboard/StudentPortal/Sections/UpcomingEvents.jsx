import { useEffect, useState } from "react";
import { MdEventNote, MdOutlineEventBusy } from "react-icons/md";
import CustomCalendar from "../Subsections/CustomCalendar";
import { motion } from "framer-motion";
import eventData from "../../../../assets/JsonFiles/Events.json";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      setEvents(eventData);
    };

    fetchEvents();
  }, []);
  return (
    <div className="flex flex-col items-start bg-lightMoss shadow rounded p-4 pb-6">
      <h2 className="text-xl font-extrabold text-emerald text-center px-1 lg:px-4 mb-3">
        Events
      </h2>
      {/* Calendar */}
      <div className="w-full rounded-xl mb-5">
        <CustomCalendar />
      </div>

      {/* Events */}
      <div className="w-full px-1  py-1 space-y-4">
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
              <h3 className="font-semibold text-xs lg:text-sm text-emerald">
                {event.title}
              </h3>

              {/* <p className="text-xs lg:text-sm text-emerald">
                {event.description}
              </p> */}
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
