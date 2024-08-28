import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/taskActions';
import TaskList from './taskList';

const TaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.taskStore.tasks);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    if(isReset) {
      dispatch(fetchTasks());
      setIsReset(false);
    }
  }, [dispatch, isReset, setIsReset]);


  const todoTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  // const todoTasks = useMemo(() => tasks.filter((task) => !task.completed), [tasks]);
  // const completedTasks = useMemo(() => tasks.filter((task) => task.completed), [tasks]);

  return (
    <div>
      <button onClick={() => setIsReset(true)}>Reset</button>
      <h1>Task Manager</h1>
      <h3>TODO</h3>
      <TaskList tasks={todoTasks} />
      <h3>COMPLETED</h3>
      <TaskList tasks={completedTasks} />
    </div>
  );
};

export default TaskManager;