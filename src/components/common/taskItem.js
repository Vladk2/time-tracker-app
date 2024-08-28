import React from 'react';

const TaskItem = ({ task, onComplete }) => {
  return (
    <li>
      <span style={{
          fontWeight: task.completed ? 'bold' : 'normal',
          textDecoration: task.completed ? 'line-through' : 'none'
        }}>
        {task.title}
      </span>
      {!task.completed && (
        <button onClick={() => onComplete(task.id)}>Complete</button>
      )}
    </li>
  );
};

export default TaskItem;