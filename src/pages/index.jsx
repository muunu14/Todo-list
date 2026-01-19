import { useState } from "react";
import { Form } from "@/components/Form";
import { Filter } from "@/components/Filter";
import { Summary } from "@/components/Summary";
import { TaskContainer } from "@/components/TaskContainer";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const clearCompletedTasks = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all completed tasks?",
    );
    if (!confirmClear) return;

    setTaskList(taskList.filter((task) => !task.isCompleted));
  };
  const filteredTasks = taskList.filter((task) => {
    if (currentFilter === "active") return !task.isCompleted;
    if (currentFilter === "completed") return task.isCompleted;
    return true;
  });
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100">
      <div className="w-[380px] bg-white mt-20 p-6 rounded-lg shadow flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-center">To-Do List</h1>
        <Form updateTaskList={setTaskList} taskListValue={taskList} />
        <Filter
          activeFilterValue={currentFilter}
          updateCurrentFilter={setCurrentFilter}
        />
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No tasks yet. Add one above!
          </p>
        )}
        <TaskContainer
          filteredTasksValue={filteredTasks}
          taskListValue={taskList}
          updateTaskList={setTaskList}
        />
        {taskList.length > 0 && (
          <Summary
            handleClearCompletedTasks={clearCompletedTasks}
            taskListValue={taskList}
          />
        )}

        <div className="text-center text-sm text-gray-400 mt-4">
          Powered by <span className="text-blue-500">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
