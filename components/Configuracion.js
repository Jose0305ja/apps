import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Configuracion = ({ navigation }) => {
  const handlePress = (setting) => {
    Alert.alert("Configuración", `${setting} seleccionado`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handlePress("Cambiar Tema")}
      >
        <Ionicons name="color-palette-outline" size={24} color="black" />
        <Text style={styles.optionText}>Cambiar Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handlePress("Cambiar Idioma")}
      >
        <Ionicons name="language-outline" size={24} color="black" />
        <Text style={styles.optionText}>Cambiar Idioma</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handlePress("Activar Notificaciones")}
      >
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text style={styles.optionText}>Activar Notificaciones</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handlePress("Modo Avión")}
      >
        <Ionicons name="airplane-outline" size={24} color="black" />
        <Text style={styles.optionText}>Modo Avión</Text>
      </TouchableOpacity>

      <Button title="Regresar" onPress={() => navigation.goBack()} />
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
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: "80%",
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Configuracion;
