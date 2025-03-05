import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image source={require("../assets/profile.png")} style={styles.image} />
      <Text>Nombre: Jose Rodriguez</Text>
      <Text>Edad: 20 años</Text>
      <Text>Puesto: Gerente</Text>
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
});

export default Perfil;
