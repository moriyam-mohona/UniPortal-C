import { Link } from "react-router-dom";
import todos from "../../../../assets/JsonFiles/Todo.json";
import { motion } from "framer-motion";

const Todo = () => {
  return (
    <div className="bg-white/60 rounded-lg shadow-md p-3 w-full">
      <h2 className="text-xl font-extrabold text-emerald mb-3">Todo</h2>

      <div className="flex flex-col gap-3">
        {todos.map((todo) => (
          <motion.div
            key={todo.id}
            className="bg-white/60 flex flex-col border-b p-2 rounded-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-emerald rounded focus:ring-emerald"
              />
              <div className="flex-1 ml-3">
                <h3 className="text-sm font-semibold text-emerald">
                  {todo.title}
                </h3>
                <p className="text-xs text-emerald">{todo.status}</p>
              </div>
              <span className="text-xs text-emerald">{todo.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <Link className="text-emerald hover:underline text-sm font-bold">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Todo;
