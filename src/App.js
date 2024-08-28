import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/common/header';
import Dashboard from './components/dashboard/dashboard';
import TaskManager from './components/taskManager/taskManager';
import { TimerProvider } from './context/timerContext';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <TimerProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<TaskManager />} />
          </Routes>
        </Router>
      </TimerProvider>
    </Provider>
  );
}

export default App;