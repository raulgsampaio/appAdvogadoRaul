import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import HeaderOptions from "../components/HeaderOptions";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { createProcessStyles } from "../styles/createProcessStyles"; // Estilos separados

export default function CreateProcessScreen() {
  const navigation = useNavigation();

  const [cliente, setCliente] = useState("");
  const [advogado, setAdvogado] = useState("");
  const [tipo, setTipo] = useState("");
  const [status, setStatus] = useState("");
  const [prazoDias, setPrazoDias] = useState("");

  const handleSave = async () => {
    if (!cliente || !advogado || !tipo || !status || !prazoDias) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "processos"), {
        cliente,
        advogado,
        tipo,
        status,
        prazoDias: Number(prazoDias),
        criadoEm: Timestamp.now(),
      });

      Alert.alert("Sucesso", "Processo cadastrado com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar processo:", error);
      Alert.alert("Erro", "Não foi possível salvar o processo.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={createProcessStyles.containerSafe}
        edges={["top", "bottom"]}
        mode="margin"
      >

      <LinearGradient
        colors={["rgba(200,166,84,0.9)", "transparent"]}
        style={createProcessStyles.gradientOverlayTop}
        start={{ x: 0, y: 0.7 }}
        end={{ x: 0, y: 0 }}
        locations={[0.6, 1]}
      />
              
      <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        style={createProcessStyles.gradientOverlayBottom}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.4, 1]}
      />  
    
      <KeyboardAvoidingView
        style={createProcessStyles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={createProcessStyles.title}>
            Cadastrar Processo
          </Text>
        <ScrollView>
          <View style={createProcessStyles.containerInput}>
            <TextInput
              style={createProcessStyles.input}
              placeholder="Cliente"
              value={cliente}
              onChangeText={setCliente}
            />
        
            <TextInput
              style={createProcessStyles.input}
              placeholder="Advogado"
              value={advogado}
              onChangeText={setAdvogado}
            />
          
            <TextInput
              style={createProcessStyles.input}
              placeholder="Tipo de Processo"
              value={tipo}
              onChangeText={setTipo}
            />
        
            <TextInput
              style={createProcessStyles.input}
              placeholder="Status Inicial"
              value={status}
              onChangeText={setStatus}
            />
        
            <TextInput
              style={createProcessStyles.input}
              placeholder="Prazo (dias)"
              value={prazoDias}
              onChangeText={setPrazoDias}
              keyboardType="numeric"
            />
          </View>
        
          <TouchableOpacity
            style={createProcessStyles.button}
            onPress={handleSave}
          >
            <Text style={createProcessStyles.buttonText}>Salvar Processo</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <HeaderOptions/>
    </SafeAreaView>
  </SafeAreaProvider>
    
        // <View style={createProcessStyles.container}>

    // </View>
    
  );
}
