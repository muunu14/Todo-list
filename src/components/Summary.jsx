// import React from "react";

// export const Summary = ({
//   taskListValue = [],
//   handleClearCompletedTasks,
// }) => {
//   const completedCount = taskListValue.filter(
//     (task) => task.isCompleted
//   ).length;

//   if (taskListValue.length === 0) return null;

//   return (
//     <div className="mt-6">
//       {/* summary row */}
//       <div className="flex justify-between items-center border-t pt-4 text-sm text-gray-500">
//         <span>
//           {completedCount} completed out of {taskListValue.length}tasks
//         </span>

//         <button
//           onClick={handleClearCompletedTasks}
//           className="text-red-500 hover:underline"
//         >
//           Clear Completed
//         </button>
//       </div>

//       {/* powered by */}
//       <div className="text-center text-xs text-gray-400 mt-6">
//         Powered by
//         <div className="text-blue-500">
//           Pinecone academy
//         </div>
//       </div>
//     </div>
//   );
// };
// import React from "react";
 
// export const Summary = ({ handleClearCompletedTasks, taskListValue }) => {
//   const completedCount = taskListValue.filter(
//     (task) => task.isCompleted
//   ).length;
 
//   return (
//     <div className="summary flex justify-between items-center mt-4 text-sm text-gray-600">
//       <span>{completedCount} task completed</span>
 
//       <button
//         onClick={handleClearCompletedTasks}
//         className="clear text-[#EF4444] hover:truncate"
//       >
//         Clear Completed
//       </button>
//     </div>
//   );
// };
 export const Summary = ({ handleClearCompletedTasks, taskListValue }) => {
  const completed = taskListValue.filter((t) => t.isCompleted).length;

  return (
    <div className="flex justify-between text-sm text-gray-600">
      <span>{completed} task completed</span>
      <button
        onClick={handleClearCompletedTasks}
        className="text-red-500"
      >
        Clear Completed
      </button>
    </div>
  );
};
