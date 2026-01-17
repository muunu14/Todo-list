import { useState } from "react";
export const Form = ({ updateTaskList, taskListValue }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    updateTaskList([
      {
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      },
      ...taskListValue,
    ]);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 border px-3 py-2 rounded-md"
        placeholder="Add new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="border px-4 bg-[#3C82F6] rounded-md">Add</button>
    </form>
  );
};
