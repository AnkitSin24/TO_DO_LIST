// AddTaskForm.js
import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim() !== '') {
      addTask(taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
