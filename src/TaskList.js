import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleCompletion }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
