import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Caracteristicas({ route }) {
  const { datosPokemon } = route.params;

  return (
    
    <View style={styles.container}>
      <Text>Id: {datosPokemon.id}</Text>
      <Text>Nombre: {datosPokemon.name}</Text>
      <Text>Altura: {datosPokemon.height}</Text>
      <Text>Peso: {datosPokemon.weight}</Text>
      <Text>Habilidades:</Text>
      {datosPokemon.abilities.map((ability, index) => (
        <Text key={index}>- {ability.ability.name}</Text>
      ))}
      <Image
        source={{ uri: datosPokemon.sprites.front_default }}
        style={styles.pokemonImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  pokemonImage: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
});
