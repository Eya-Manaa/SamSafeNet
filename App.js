import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importation des écrans
import HomeScreen from './src/components/HomeScreen';
import AlertScreen from './src/components/AlertScreen';
import BluetoothScreen from './src/components/BluetoothScreen';
import MapScreen from './src/components/MapScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} options={{ title: 'Alerte' }} />
        <Stack.Screen name="BluetoothScreen" component={BluetoothScreen} options={{ title: 'Bluetooth' }} />
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: 'Carte' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;