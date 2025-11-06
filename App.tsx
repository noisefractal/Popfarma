// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import HomeScreen from './src/screens/HomeScreen';
import DipironaDetailScreen from './src/screens/DipironaDetailScreen';
import SimeticonDetailScreen from './src/screens/SimeticonDetailScreen';
import ParacetamolDetailScreen from './src/screens/ParacetamolDetailScreen';
import ShampooDetailScreen from './src/screens/ShampooDetailScreen';
import { RootStackParamList } from './src/types'; // Caminho correto


const Stack = createStackNavigator<RootStackParamList>(); // Usando o tipo aqui

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DipironaDetail" component={DipironaDetailScreen} />
        <Stack.Screen name="SimeticonDetail" component={SimeticonDetailScreen} />
        <Stack.Screen name="ParacetamolDetail" component={ParacetamolDetailScreen} />
        <Stack.Screen name="ShampooDetail" component={ShampooDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
