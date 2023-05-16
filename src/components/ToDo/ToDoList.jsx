import React from "react";

import ToDoItem from "./ToDoItem.jsx";

import "./ToDo.css";

export default function ToDoList({ toDoItems, onDelete }) {
  const mappedItems = toDoItems.map((toDoItem, index) => (
    <ToDoItem
      key={index}
      toDoItem={toDoItem}
      onDelete={() => onDelete(index)}
    />
  ));

  return (
    <div className="toDo-container">
      <h1>To do list</h1>
      {mappedItems}
    </div>
  );
}
