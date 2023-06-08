import React from "react";

function AllButton({ onClick }) {
  return <button onClick={onClick}>All</button>;
}

function ActiveButton({ onClick }) {
  return <button onClick={onClick}>Active</button>;
}

function CompletedButton({ onClick }) {
  return <button onClick={onClick}>Completed</button>;
}

export default AllButton;
export { ActiveButton, CompletedButton };
