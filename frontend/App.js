// frontend/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>TaskFlow Manager</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;;
