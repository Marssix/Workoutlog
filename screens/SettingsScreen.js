import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
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
      <View style={styles.radioContainer}>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="metric"
            status={metricUnits ? 'checked' : 'unchecked'}
            onPress={() => handleToggleUnits(true)}
          />
          <Text style={styles.radioLabel}>Metric</Text>
        </View>
        <View style={styles.radioButtonContainer}>
          <RadioButton
            value="imperial"
            status={metricUnits ? 'unchecked' : 'checked'}
            onPress={() => handleToggleUnits(false)}
          />
          <Text style={styles.radioLabel}>Imperial</Text>
        </View>
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
  radioContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioLabel: {
    marginLeft: 10,
  },
});

export default SettingsScreen;
