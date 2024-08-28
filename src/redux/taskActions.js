export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TASKS_REQUEST' });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?limit=10');
    const data = await response.json();
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data.slice(0, 20) });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', error });
  }
};

export const completeTask = (taskId) => (dispatch) => {
  dispatch({ type: 'COMPLETE_TASK', payload: taskId });
};