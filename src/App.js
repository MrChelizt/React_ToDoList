import { useState } from "react";

import Form from "./components/Form/Form";
import ToDoList from "./components/ToDo/ToDoList";

import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addToDo = (toDoItem) => {
    const newToDos = [...toDoList, toDoItem];
    setToDoList(newToDos);
  };

  const deleteToDo = (index) => {
    const newToDos = [...toDoList];
    newToDos.splice(index, 1);
    setToDoList(newToDos);
  };

  return (
    <div className="App">
      <Form onAdd={addToDo} />
      <ToDoList toDoItems={toDoList} onDelete={deleteToDo} />
    </div>
  );
}

export default App;
