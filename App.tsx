import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Routes'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}
