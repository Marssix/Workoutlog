import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button, Alert } from 'react-native';
import { useExerciseContext } from '../components/ExerciseContext'; // Import the hook

const SettingsScreen = () => {
    const { clearExerciseHistory, metricUnits, setMetricUnits } = useExerciseContext(); // Import the function to clear history
    const [isClearing, setIsClearing] = useState(false); // State to track clearing history loading
  
    const handleToggleUnits = (value) => {
      setMetricUnits(value); // Update metricUnits in the context
    };
  
    const handleClearHistory = () => {
      Alert.alert(
        'Clear History',
        'Are you sure you want to clear the exercise history?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              setIsClearing(true); // Set loading state
              clearExerciseHistory(); // Clear exercise history
              setIsClearing(false); // Reset loading state
            },
          },
        ]
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.text}>Units</Text>
          <Switch value={metricUnits} onValueChange={handleToggleUnits} />
          <Text style={styles.text}>{metricUnits ? 'Metric' : 'Imperial'}</Text>
        </View>
        <Button title="Clear History" onPress={handleClearHistory} disabled={isClearing} />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
  },
});

export default SettingsScreen;
