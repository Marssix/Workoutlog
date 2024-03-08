import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { SegmentedButtons } from 'react-native-paper';
import { useExerciseContext } from '../components/ExerciseContext'; // Import the hook
import { Keyboard } from 'react-native';

const AddExerciseScreen = () => {
  const { addExercise } = useExerciseContext(); // Use the hook

  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [exerciseType, setExerciseType] = useState(''); // Added state for exercise type

  const handleAddExercise = () => {
    // Validate distance and duration
    if (isNaN(distance) || isNaN(duration) || distance < 0 || duration < 0) {
      Alert.alert('Error', 'Distance and duration must be non-negative numeric values.');
      return;
    }

    // Validate exercise type
    if (!exerciseType) {
      Alert.alert('Error', 'Please select an exercise type.');
      return;
    }

    // Logic to handle submitting exercise data
    const exerciseData = {
      name: exerciseType, // Exercise name is set to the selected exercise type
      distance: parseFloat(distance),
      duration: parseFloat(duration),
      date: date.toISOString(), // Convert date to ISO string
    };

    console.log('Exercise Data:', exerciseData);

    // Add the exercise to the context
    addExercise(exerciseData);

    // Reset form fields
    setDistance('');
    setDuration('');
    setDate(new Date());
    setExerciseType('');
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.segmentContainer}>
          <SegmentedButtons
            value={exerciseType}
            onValueChange={setExerciseType}
            buttons={[
              { value: 'Walking', label: 'Walking', icon: 'walk' },
              { value: 'Biking', label: 'Biking', icon: 'bike' },
              { value: 'Running', label: 'Running', icon: 'run' },
            ]}
            renderButton={({ value, label, icon }) => (
              <View style={styles.buttonContainer}>
                <MaterialIcons name={icon} size={24} color="black" />
                <SegmentedButtons.Button
                  value={value}
                  label={label}
                  style={styles.segmentButton}
                  textStyle={styles.segmentButtonText}
                />
              </View>
            )}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Distance (km)"
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Duration (min)"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />
        <View style={styles.centered}>
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />
        </View>
        <Button title="Add Exercise" onPress={handleAddExercise} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  segmentContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  segmentButton: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
  },
  segmentButtonText: {
    fontSize: 16,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default AddExerciseScreen;
