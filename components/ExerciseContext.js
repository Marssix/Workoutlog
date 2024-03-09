import React, { createContext, useContext, useState } from 'react';

const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [metricUnits, setMetricUnits] = useState(true); // Initialize metricUnits state

  const addExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, exercise]);
  };

  const clearExerciseHistory = () => {
    setExercises([]);
  };

  // Include setMetricUnits in the context value
  const contextValue = {
    exercises,
    addExercise,
    clearExerciseHistory,
    metricUnits, // Include metricUnits in the context value
    setMetricUnits, // Include setMetricUnits in the context value
  };

  return (
    <ExerciseContext.Provider value={contextValue}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExerciseContext = () => useContext(ExerciseContext);
