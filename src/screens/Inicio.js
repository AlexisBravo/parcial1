import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation();
  const [nombrePokemon, setNombrePokemon] = useState('');
  const [datosPokemon, setDatosPokemon] = useState(null);

  const getPokemon = () => {
    if (!nombrePokemon) {
      alert('Ingresa el nombre de un Pokémon');
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setDatosPokemon(data))
      .catch(() => alert('Nombre Incorrecto.'));
  };

  return (
    <ImageBackground source={'/assets/pokemonfondo.jpg'} style={styles.background}>
      <View style={styles.container}>
        <Text>Buscador de Pokemon</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre"
          value={nombrePokemon}
          onChangeText={setNombrePokemon}
        />
        <TouchableOpacity style={styles.buttonBuscar} onPress={getPokemon}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        {datosPokemon && (
          <View style={styles.pokemonContainer}>
            <Text>Nombre: {datosPokemon.name}</Text>
            <Image
              source={{ uri: datosPokemon.sprites.front_default }}
              style={styles.pokemonImage}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Caracteristicas', { datosPokemon })}
            >
              <Text style={styles.buttonCaracteristicas}>Caracteristicas</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#CEE2FA'
  },
  background: {
    flex: 1,
    resizeMode: 'cover'
  },

  input: {
    height: 40,
    width: '20%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonBuscar: {
    backgroundColor: '#2584FA',
    padding: 10,
    margin: 10,
  },
  buttonCaracteristicas: {
    backgroundColor: '#25D6FA',
    padding: 10,
    margin: 10,
  },
  pokemonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  pokemonImage: {
    width: 250,
    height: 250,
  },
});
