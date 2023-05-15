import React from "react";
import "./ToDo.css";

export default function ToDoItem({ toDoItem, onDelete }) {
  const getClassName = () => {
    switch (toDoItem.progress) {
      case "1":
        return "progress-blue";
      case "2":
        return "progress-green";
      default:
        return "progress-red";
    }
  };
  return (
    <div className="toDo-item">
      <div className={getClassName()}></div>
      <p>{toDoItem.title}</p>
      <p>{toDoItem.date}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
