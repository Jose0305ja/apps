import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import Ahorro from "./components/Ahorro";
import Perfil from "./components/Perfil";
import Configuracion from "./components/Configuracion";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ahorro" component={Ahorro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Configuración" component={Configuracion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
