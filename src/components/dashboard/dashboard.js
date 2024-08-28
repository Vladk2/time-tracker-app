import React, { useContext } from 'react';
import { TimerContext } from '../../context/timerContext';
import Timer from './timer';

const Dashboard = () => {
  const { formattedTime } = useContext(TimerContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Elapsed Time: {formattedTime}</p>
      <Timer />
    </div>
  );
};

export default Dashboard;