import React from "react";
import AllButton, { ActiveButton, CompletedButton } from "./Buttons";

function Note({ tasks, onAllClick, onActiveClick, onCompletedClick }) {
  const date = new Date().toString();
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const taskCount = tasks.length;

  return (
    <div className="noteHeader">
      <h1>{formattedDate}</h1>
      <div className="noteTasks">
        <p>{taskCount} taks</p>
        <AllButton onClick={onAllClick} />
        <ActiveButton onClick={onActiveClick} />
        <CompletedButton onClick={onCompletedClick} />
      </div>
    </div>
  );
}

export default Note;
