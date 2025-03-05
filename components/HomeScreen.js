import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Ahorro")}
      >
        <Text style={styles.buttonText}>Ir a Ahorro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.buttonText}>Ir a Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Configuración")}
      >
        <Text style={styles.buttonText}>Ir a Configuración</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default HomeScreen;
