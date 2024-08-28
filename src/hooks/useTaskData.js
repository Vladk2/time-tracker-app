import { useEffect, useState } from 'react';

export const useTaskData = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from API or some data source
    const fetchTasks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return tasks;
};