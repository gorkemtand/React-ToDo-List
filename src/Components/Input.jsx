import React, { useState } from "react";

function Input({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (task.trim() !== "") {
        onAddTask(task);
        setTask("");
      }
    }
  };

  return (
    <div>
      <input
        className="taskInput"
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Input;
