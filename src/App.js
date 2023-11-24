// App.js
import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = { id: Date.now(), description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const totalTasks = tasks.length;

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <AddTaskForm addTask={addTask} />
      <div className="task-count">
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks.length}</p>
      </div>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;
