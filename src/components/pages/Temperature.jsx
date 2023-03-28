import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const Temperature = () => {
  const [centigrade, setCentigrade] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0)
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Ingresa la temperatura en grados centigrados</Text>
    <TextInput
      placeholder='Grados centigrados'
      style={styles.input}
      onChangeText={(text) => {setCentigrade(text); setFahrenheit(0)}}
      keyboardType='numeric'
    // value={centigrade}
    />

    <Button title="Convertir" onPress={() => setFahrenheit((1.8*centigrade)+32)} />
    {
      fahrenheit != 0 ? <Text>{centigrade} grados centigrados, son {fahrenheit} grados Fahrenheit</Text> : false
    }
  </View>;
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Temperature;