import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const Temperature = () => {
  const [centigrade, setCentigrade] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0)
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Convertir grados centigrados a grados farenheith {"\n"}{"\n"}</Text>
    <Text>Ingresa la temperatura en grados centigrados</Text>
    <TextInput
      keyboardType='numeric'
      placeholder='Grados centigrados'
      style={styles.input}
      onChangeText={(text) => { setCentigrade(text); setFahrenheit(0) }}
    // value={centigrade}
    />
    <Text>{"\n"}</Text>

    <Button title="Convertir" onPress={() => { centigrade != 0 ? setFahrenheit((1.8 * centigrade) + 32) : false }} />
    {
      fahrenheit != 0 ? isNaN(centigrade) == false ?
        <Text>{centigrade} grados centigrados, son {fahrenheit} grados Fahrenheit</Text>
        : <Text>No has ingresado un número válido</Text>
        : false
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