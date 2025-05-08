import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

export default function TelaCriacaoBruna({ navigation }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [cliente, setCliente] = useState("");
  const [advogado, setAdvogado] = useState("");
  const [prazo, setPrazo] = useState("");

  const tipos = [
    "Trabalhista",
    "Cível",
    "Penal",
    "Tributário",
    "Ambiental",
    "Família",
    "Previdenciário",
  ];

  const salvar = () => {
    if (!nome || !tipo || !cliente || !advogado || !prazo) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (prazo.length > 2) {
      Alert.alert("Erro", "O prazo deve ter no máximo 2 dígitos.");
      return;
    }

    navigation.navigate("Salvar", { dbProcessName: nome });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar Processo</Text>

      <TextInput
        style={styles.estilobordacriacao}
        placeholder="Nome do processo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.estilobordacriacao}
        placeholder="Cliente vinculado"
        value={cliente}
        onChangeText={setCliente}
      />

      <TextInput
        style={styles.estilobordacriacao}
        placeholder="Advogado responsável"
        value={advogado}
        onChangeText={setAdvogado}
      />

      <TextInput
        style={styles.estilobordacriacao}
        placeholder="Prazo (dias)"
        keyboardType="numeric"
        value={prazo}
        onChangeText={setPrazo}
        maxLength={2}
      />
      <Picker
        selectedValue={tipo}
        onValueChange={(itemValue) => setTipo(itemValue)}
        style={[styles.picker, { color: tipo === "" ? "#999" : "#000" }]}
      >
        <Picker.Item label="Selecione o tipo" value="" enabled={false} />
        {tipos.map((tipo, index) => (
          <Picker.Item label={tipo} value={tipo} key={index} />
        ))}
      </Picker>

      <Button title="Criar Processo" onPress={salvar} />
    </View>
  );
}
