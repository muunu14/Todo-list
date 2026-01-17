
import React from "react";

export const Task = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-md bg-white">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggleCompleted(task.id)}
          className="w-4 h-4"
        />

        <span
          className={`text-sm ${
            task.isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 text-sm hover:underline"
      >
        Delete
      </button>
    </div>
  );
};
