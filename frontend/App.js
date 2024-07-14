import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3000/api') // Substitua com a URL correta da sua API
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Aplicativo de Certificação</Text>
    </View>
  );
};

export default App;
