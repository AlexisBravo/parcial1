import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Inicio from './src/screens/Inicio';
import Informacion from './src/screens/Informacion';
import Caracteristicas from './src/screens/Caracteristicas';

const Tab = createBottomTabNavigator();
const InicioStack = createNativeStackNavigator();

function InicioStackScreen() {
  return (
    <InicioStack.Navigator>
      <InicioStack.Screen name="Inicio" component={Inicio} />
      <InicioStack.Screen name="Caracteristicas" component={Caracteristicas} />
    </InicioStack.Navigator>
  );
}

function RutaTab() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'purple',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => <Fontisto name="home" size={24} color="black" />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Informacion"
        component={Informacion}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color, size }) => <Entypo name="info-with-circle" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RutaTab />
    </NavigationContainer>
  );
}
