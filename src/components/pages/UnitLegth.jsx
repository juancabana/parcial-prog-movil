import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const UnitLength = () => {
  const [yarda, setYarda] = useState(0);
  const [metros, setMetros] = useState(0)
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Convertir yardas a metros {"\n"}{"\n"}</Text>

    <Text>Ingresa la longitud en yardas</Text>
    <TextInput
      keyboardType='numeric'
      placeholder='Longitud en yardas'
      style={styles.input}
      onChangeText={(text) => { setYarda(text); setMetros(0) }}
    />
    <Text>{"\n"}</Text>
    <Button title="Convertir" onPress={() => { yarda != 0 ? setMetros(yarda * 0.9144) : false }} />
    {
      metros != 0 ? isNaN(yarda) == false ?
        <Text>{yarda} yardas, son {metros} metros</Text>
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
export default UnitLength;
