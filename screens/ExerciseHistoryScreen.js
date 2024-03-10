import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useExerciseContext } from '../components/ExerciseContext'; 
import styles from '../style/style';
import { MaterialIcons } from '@expo/vector-icons';

const ExerciseHistoryScreen = () => {
  const { exercises, metricUnits, addExercise } = useExerciseContext(); 
  const [totals, setTotals] = useState({ running: 0, biking: 0, walking: 0 });

  // Add default exercises when the component mounts
  useEffect(() => {
    addExercise({
      name: 'Biking',
      distance: 12,
      duration: 20,
      date: new Date(2024, 2, 3).toISOString(), 
    });
    addExercise({
      name: 'Walking',
      distance: 3,
      duration: 55,
      date: new Date(2024, 2, 3).toISOString(), 
    });
  }, []);

  useEffect(() => {
    // Calculate totals when exercises change
    const runningTotal = exercises.reduce((acc, curr) => (curr.name === 'Running' ? acc + curr.distance : acc), 0);
    const bikingTotal = exercises.reduce((acc, curr) => (curr.name === 'Biking' ? acc + curr.distance : acc), 0);
    const walkingTotal = exercises.reduce((acc, curr) => (curr.name === 'Walking' ? acc + curr.distance : acc), 0);
    setTotals({ running: runningTotal, biking: bikingTotal, walking: walkingTotal });
  }, [exercises]);

  const renderTotalItem = (name, distance) => (
    <View style={styles.totalItem}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {name === 'Running' && <MaterialIcons name="directions-run" size={24} color="black" />}
        {name === 'Biking' && <MaterialIcons name="directions-bike" size={24} color="black" />}
        {name === 'Walking' && <MaterialIcons name="directions-walk" size={24} color="black" />}
        <Text style={styles.totalText}>{distance.toFixed(2)} km</Text>
      </View>
    </View>
  );
  
  
  
  

  const renderItem = ({ item }) => {
    const distance = metricUnits ? item.distance : item.distance * 0.621371; // Convert distance to miles if metricUnits is false
    const distanceUnit = metricUnits ? 'km' : 'mi'; // Set the distance unit based on metricUnits

    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.text}>Distance: {distance.toFixed(2)} {distanceUnit}</Text>
        <Text style={styles.text}>Duration: {item.duration} Min</Text>
        <Text style={styles.text}>Date: {new Date(item.date).toLocaleDateString()}</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.totalContainer}>
        <View style={styles.horizontalContainer}>
          {renderTotalItem('Running', totals.running)}
          {renderTotalItem('Biking', totals.biking)}
          {renderTotalItem('Walking', totals.walking)}
        </View>
      </View>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
};

export default ExerciseHistoryScreen;
