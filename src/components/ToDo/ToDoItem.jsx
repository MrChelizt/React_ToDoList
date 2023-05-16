import React from "react";

import "./ToDo.css";

export default function ToDoItem({ toDoItem, onDelete }) {
  const progress = toDoItem.progress;
  const title = toDoItem.title;
  const date = toDoItem.date;

  return (
    <div className="toDo-item">
      <div className={progress}></div>
      <p>{title}</p>
      <p>{date}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
