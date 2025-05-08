import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles"; // importa os estilos do arquivo separado

export default function AtualizarScreenBruna() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [cliente, setCliente] = useState("");
  const [advogado, setAdvogado] = useState("");
  const [status, setStatus] = useState("");

  const handleSalvar = () => {
    if (!nome || !tipo || !cliente || !advogado || !status) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    Alert.alert("Sucesso", "Processo atualizado com sucesso!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Atualizar</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome do Processo</Text>
        <TextInput
          placeholder="Ex: Processo..."
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Tipo do Processo</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={tipo} onValueChange={setTipo}>
            <Picker.Item label="Seleção do Tipo de processo" value="" />
            <Picker.Item label="Cível" value="civel" />
            <Picker.Item label="Criminal" value="criminal" />
            <Picker.Item label="Trabalhista" value="trabalhista" />
          </Picker>
        </View>

        <Text style={styles.label}>Cliente Vinculado</Text>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={cliente}
          onChangeText={setCliente}
        />

        <Text style={styles.label}>Advogado Responsavel</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={advogado} onValueChange={setAdvogado}>
            <Picker.Item label="Seleção do Advogado" value="" />
            <Picker.Item label="Dr. João" value="joao" />
            <Picker.Item label="Dra. Maria" value="maria" />
          </Picker>
        </View>

        <Text style={styles.label}>Status</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={status} onValueChange={setStatus}>
            <Picker.Item label="Seleção dos Status" value="" />
            <Picker.Item label="Aberto" value="aberto" />
            <Picker.Item label="Em andamento" value="andamento" />
            <Picker.Item label="Encerrado" value="encerrado" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
