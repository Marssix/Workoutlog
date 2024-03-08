import React, { createContext, useContext, useState } from 'react';

const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, exercise]);
  };

  const clearExerciseHistory = () => {
    setExercises([]);
  };

  return (
    <ExerciseContext.Provider value={{ exercises, addExercise, clearExerciseHistory }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExerciseContext = () => useContext(ExerciseContext);
