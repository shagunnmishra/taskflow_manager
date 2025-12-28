// frontend/TaskList.js
import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.title} - {task.status}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
