// frontend/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  // Backend se tasks fetch karna
  useEffect(() => {
    fetch("http://localhost:8000/tasks/")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // Backend me naya task add karna
  const addTask = (task) => {
    fetch("http://localhost:8000/tasks/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(newTask => setTasks([...tasks, newTask]));
  };

  return (
    <div>
      <h1>TaskFlow Manager</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
