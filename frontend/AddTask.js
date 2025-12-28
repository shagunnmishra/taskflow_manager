// frontend/AddTask.js
import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAdd({ title, status: "Pending" });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter task..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
