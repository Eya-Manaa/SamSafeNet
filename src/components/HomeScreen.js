import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenue sur Sam SafeNet</Text>
      <Button title="Envoyer une Alerte" onPress={() => navigation.navigate('AlertScreen')} />
      <Button title="Voir la Carte" onPress={() => navigation.navigate('MapScreen')} />
      <Button title="Partage Bluetooth" onPress={() => navigation.navigate('BluetoothScreen')} />
    </View>
  );
}