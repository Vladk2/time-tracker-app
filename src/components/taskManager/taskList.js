import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask } from '../../redux/taskActions';
import TaskItem from '../common/taskItem';

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  const handleComplete = (taskId) => {
      dispatch(completeTask(taskId));
    };

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onComplete={handleComplete} />
      ))}
    </ul>
  );
};

export default TaskList;