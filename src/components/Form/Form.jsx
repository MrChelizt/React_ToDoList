import React, { useState } from "react";

export default function Form({ onAdd }) {
  const [formInputs, setFormInputs] = useState({});

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setFormInputs((values) => ({ ...values, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(formInputs);
    setFormInputs({});
    document.getElementById("toDo-form").reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} id="toDo-form">
        <div>
          <label>Title:</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" id="date" onChange={handleChange} />
        </div>
        <div>
          <label>Progress:</label>
          <select
            id="progress"
            onChange={handleChange}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled={true}>
              Choose the status
            </option>
            <option value="1">In Progress</option>
            <option value="2">Finished</option>
            <option value="3">Not Started</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
