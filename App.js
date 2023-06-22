import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      alert('Você está abaixo do peso! Seu IMC é: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Peso ideal! Seu IMC é: ' + imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso! Seu IMC é: ' + imc.toFixed(2));
    }else if(imc > 34.9){
      alert('Você está acima do peso! Seu IMC é: ' + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>

      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      placeholderTextColor="#fff"
      keyboardType="numeric"
      />

      <TextInput 
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura (cm)"
      placeholderTextColor="#fff"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItens: 'center'
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30
  },
  input: {
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#fff',
    fontSize: 23
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#41aef4',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25
  }
});