import { Task } from "./Task";
export const TaskContainer = ({
  filteredTasksValue,
  taskListValue,
  updateTaskList,
}) => {
  const toggleCompleted = (id) => {
    updateTaskList(
      taskListValue.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };
  const deleteTask = (id) => {
    if (!window.confirm("Delete this task?")) return;
    updateTaskList(taskListValue.filter((task) => task.id !== id));
  };
  return (
    <div className="flex flex-col gap-2">
      {filteredTasksValue.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
