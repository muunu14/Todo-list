export const Filter = ({ activeFilterValue, updateCurrentFilter }) => {
  const btnStyle = (type) =>
    `px-3 py-1 rounded-md border transition ${
      activeFilterValue === type
        ? "bg-blue-600 text-white"
        : "bg-white text-gray-600"
    }`;
  return (
    <div className="flex gap-2">
      <button type="button" className={btnStyle("all")} onClick={() => updateCurrentFilter("all")}>
        All
      </button>
      <button type="button" className={btnStyle("active")} onClick={() => updateCurrentFilter("active")}>
        Active
      </button>
      <button type="button" className={btnStyle("completed")} onClick={() => updateCurrentFilter("completed")}>
        Completed
      </button>
    </div>
  );
};
