import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [gasPrice, setGasPrice] = useState('');
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [result, setResult] = useState('');

  const comparePrices = () => {
    const gasValue = parseFloat(gasPrice);
    const ethanolValue = parseFloat(ethanolPrice);
    const ethanolGasRatio = ethanolValue / gasValue;

    if (ethanolGasRatio < 0.7) {
      setResult('A melhor escolha é comprar álcool.');
    } else {
      setResult('A melhor escolha é comprar gasolina.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/down.jpg')} style={styles.image} />
      <Text style={styles.label}>Preço da GASOLINA:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasPrice}
        onChangeText={setGasPrice}
      />

      <Text style={styles.label}>Preço do ÁLCOOL:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={ethanolPrice}
        onChangeText={setEthanolPrice}
      />

      <Button title="Comparar Preços" onPress={comparePrices} />

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'lightgrey',
     maxWidth: 400,
    marginTop: 0,
    marginBottom: 0,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
    color: 'darkpink',
  },
});

export default App
