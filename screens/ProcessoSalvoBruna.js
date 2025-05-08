import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function ProcessoSalvoBruna({ route, navigation }) {
  const { dbProcessName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.checkmark}>✓</Text>
      <Text style={styles.titulo}>Processo Salvo com Sucesso!</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nome: {dbProcessName}</Text>
        <Text style={styles.infoText}>Status: Em aberto</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar à criação"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}
