import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskReducer';

const store = configureStore({
  reducer: {
    taskStore: taskReducer,
  },
});

export default store;