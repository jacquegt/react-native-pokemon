import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import PokemonList from './components/pokemonList';

export default function App() {
  const [textForSearch, setTextForSearch] = useState('');
  
  return (
    <View style={styles.container}>
      <View>
        <TextInput value={textForSearch} onChangeText={(value) => setTextForSearch(value)} placeholder='Buscar' />
      </View>
      <PokemonList textForSearch={textForSearch}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
