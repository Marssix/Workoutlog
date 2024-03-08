import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import styles from './style/style';
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNavigator from './components/BottomNagivator.js'; 
import { horizontalScale, verticalScale, moderateScale } from './components/Metrics';
import { ExerciseProvider } from './components/ExerciseContext'; // Import ExerciseProvider



export default function App() {
  return (
    <ExerciseProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Header style={{ width: horizontalScale(100), height: verticalScale(50) }} />
          <Footer style={{ marginBottom: moderateScale(20) }} />
          <BottomNavigator />
        </View>
      </NavigationContainer>
    </ExerciseProvider>
  );
};
