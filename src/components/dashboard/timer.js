import React, { useContext } from 'react';
import { TimerContext } from '../../context/timerContext';

const Timer = () => {
  const { startTimer, stopTimer, resetTimer } = useContext(TimerContext);

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;