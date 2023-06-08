import React, { useState } from "react";
import Note from "./Note";
import Input from "./Input";
import Items from "./Items";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const filteredTasks = filterTasks(); // Get the filtered tasks
    const updatedTasks = tasks.filter((_, i) => {
      const filteredIndex = tasks.indexOf(filteredTasks[i]);
      return filteredIndex !== index;
    });
    setTasks(updatedTasks);
  };

  const filterTasks = () => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="appContainer">
      <Note
        tasks={tasks}
        onAllClick={() => handleFilterChange("all")}
        onActiveClick={() => handleFilterChange("active")}
        onCompletedClick={() => handleFilterChange("completed")}
      />
      <Input onAddTask={handleAddTask} />
      <Items
        tasks={filterTasks()}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
