import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#000000", "#2b1d0e", "#b68d40", "#e7c57b"]}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sobre este aplicativo</Text>
        <Text style={styles.text}>
          Este é um projeto acadêmico desenvolvido por alunos da Universidade de Fortaleza (Unifor).
        </Text>

        <Text style={[styles.text, styles.subtitle]}>
          Desenvolvedores:
        </Text>
        <Text style={styles.text}>• Bruna Leal</Text>
        <Text style={styles.text}>• Igor Santiago</Text>
        <Text style={styles.text}>• Matheus Matos</Text>
        <Text style={styles.text}>• Pedro Victor Braga</Text>
        <Text style={styles.text}>• Raul Sampaio</Text>

        <Text style={[styles.text, { marginTop: 20 }]}>
          Para entrar em contato, envie um e-mail para:
        </Text>
        <Text style={[styles.text, styles.email]}>advogado@gmail.com</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  email: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffe580",
  },
  button: {
    backgroundColor: "#ffffff33",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 32,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
