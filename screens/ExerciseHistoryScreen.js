import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useExerciseContext } from '../components/ExerciseContext'; // Import the hook
import styles from '../style/style';

const ExerciseHistoryScreen = () => {
  const { exercises, metricUnits } = useExerciseContext(); // Use the hook to access exercises and metricUnits

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
    <FlatList
      data={exercises}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()} // Use index as the key
    />
  );
};

export default ExerciseHistoryScreen;
