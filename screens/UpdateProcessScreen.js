import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderOptions from "../components/HeaderOptions";
import { updateProcessStyles } from "../styles/updateProcessStyles"; // Estilos separados

export default function UpdateProcessScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { processo } = route.params; // Recebendo o processo clicado

  const [novoStatus, setNovoStatus] = useState(processo.status);

  const handleUpdateStatus = async () => {
    if (!novoStatus) {
      Alert.alert("Erro", "O status não pode ficar vazio.");
      return;
    }

    try {
      const processoRef = doc(db, "processos", processo.id);
      await updateDoc(processoRef, { status: novoStatus });

      Alert.alert("Sucesso", "Status atualizado!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      Alert.alert("Erro", "Não foi possível atualizar o status.");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={updateProcessStyles.container}
        edges={["top", "bottom"]}
        mode="margin"
      >
        <LinearGradient
          colors={["rgba(200,166,84,0.9)", "transparent"]}
          style={updateProcessStyles.gradientOverlayTop}
          start={{ x: 0, y: 0.7 }}
          end={{ x: 0, y: 0 }}
          locations={[0.6, 1]}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.9)", "transparent"]}
          style={updateProcessStyles.gradientOverlayBottom}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.4, 1]}
        />
        <View style={updateProcessStyles.containerMainPosition}>
          <Text style={updateProcessStyles.title}>
            Atualizar Processo {processo.cliente}
          </Text>
          <View style={updateProcessStyles.containerMain}>
            <Text style={updateProcessStyles.label}>Cliente:</Text>
            <Text style={updateProcessStyles.text}>{processo.cliente}</Text>

            <Text style={updateProcessStyles.label}>Advogado:</Text>
            <Text style={updateProcessStyles.text}>{processo.advogado}</Text>

            <Text style={updateProcessStyles.label}>Tipo:</Text>
            <Text style={updateProcessStyles.text}>{processo.tipo}</Text>

            <Text style={updateProcessStyles.label}>Novo Status:</Text>
            <TextInput
              style={updateProcessStyles.input}
              value={novoStatus}
              onChangeText={setNovoStatus}
              placeholder="Digite o novo status"
            />
          </View>

          <TouchableOpacity
            style={updateProcessStyles.button}
            onPress={handleUpdateStatus}
          >
            <Text style={updateProcessStyles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        <View style={updateProcessStyles.footerBar}>
          <HeaderOptions />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
