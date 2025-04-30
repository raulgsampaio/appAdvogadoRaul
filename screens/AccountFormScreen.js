import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { createProcessStyles } from "../styles/createProcessStyles"; // Estilos separados

export default function AccountFormScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSave = async () => {
    if (!nome || !ocupacao || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "usuario"), {
        nome,
        ocupacao,
        email,
        senha,
      });

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      Alert.alert("Erro", "Não foi possível salvar o usuário.");
    }
  };

  return (
    <View style={createProcessStyles.container}>
      <Text style={createProcessStyles.title}>Cadastrar Usuário</Text>

      <TextInput
        style={createProcessStyles.input}
        placeholder="Nome do usuário"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={createProcessStyles.input}
        placeholder="Ocupação"
        value={ocupacao}
        onChangeText={setOcupacao}
      />
      <TextInput
        style={createProcessStyles.input}
        placeholder="Digite seu melhor e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={createProcessStyles.input}
        placeholder="Digite uma senha forte"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <TouchableOpacity style={createProcessStyles.button} onPress={handleSave}>
        <Text style={createProcessStyles.buttonText}>Salvar Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
