import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Ahorro = ({ navigation }) => {
  const [ahorro, setAhorro] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ahorros</Text>
      <Text style={styles.counter}>${ahorro}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setAhorro(ahorro + 10)}>
          <Ionicons name="add-circle" size={50} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAhorro(0)}>
          <Ionicons name="refresh-circle" size={50} color="red" />
        </TouchableOpacity>
      </View>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  counter: {
    fontSize: 40,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
  },
});

export default Ahorro;
