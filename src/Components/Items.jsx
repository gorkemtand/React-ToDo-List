function Items({ tasks, onToggle, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <div className="emptyState">
          <p>No tasks found</p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div
            className={`taskItem ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <input
              className="checkBox"
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(index)}
            />
            <span
              className="taskText"
              style={{
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.text}
            </span>
            <button
              className="deleteButton"
              onClick={() => onDelete(index)}
            ></button>
          </div>
        ))
      )}
    </div>
  );
}

export default Items;
