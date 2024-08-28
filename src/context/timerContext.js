import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const tick = useCallback(() => {
    if (isRunning && startTime !== null) {
      setElapsedTime(Date.now() - startTime);
    }
  }, [isRunning, startTime]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(tick, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, tick]);

  const startTimer = useCallback(() => {
    if (!isRunning) {
      setStartTime(Date.now() - elapsedTime);
      setIsRunning(true);
    }
  }, [elapsedTime, isRunning]);

  const stopTimer = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
    }
  }, [isRunning]);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setElapsedTime(0);
    setStartTime(null);
  }, []);

  const formattedTime = useMemo(() => {
    const seconds = Math.floor(elapsedTime / 1000);
    return `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
  }, [elapsedTime]);

  return (
    <TimerContext.Provider value={{ startTimer, stopTimer, resetTimer, formattedTime }}>
      {children}
    </TimerContext.Provider>
  );
};
