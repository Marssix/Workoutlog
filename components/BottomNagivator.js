import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import AddExerciseScreen from '../screens/AddExerciseScreen';
import ExerciseHistoryScreen from '../screens/ExerciseHistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            display: route.name === 'Home' ? 'none' : 'flex'
        }
      })}
    >
      <Tab.Screen
        name="Add Exercise" 
        component={AddExerciseScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="directions-run" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={ExerciseHistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
