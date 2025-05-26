import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderOptions from "../components/HeaderOptions";
import { updateProcessStyles } from "../styles/updateProcessStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function UpdateProcessScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { processo } = route.params;

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
      <SafeAreaView style={updateProcessStyles.container} edges={["top", "bottom"]} mode="margin">
        <LinearGradient
          colors={["#000000", "#2b1d0e", "#b68d40", "#e7c57b"]}
          style={StyleSheet.absoluteFill}
        />

        <KeyboardAwareScrollView
          contentContainerStyle={updateProcessStyles.scrollContainer}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={100}
        >
          <Text style={updateProcessStyles.title}>
            Atualizar Processo {processo.cliente}
          </Text>

          <View style={updateProcessStyles.formContainer}>
            <View style={updateProcessStyles.infoBlock}>
              <Text style={updateProcessStyles.label}>Cliente:</Text>
              <Text style={updateProcessStyles.value}>{processo.cliente}</Text>
            </View>

            <View style={updateProcessStyles.infoBlock}>
              <Text style={updateProcessStyles.label}>Advogado:</Text>
              <Text style={updateProcessStyles.value}>{processo.advogado}</Text>
            </View>

            <View style={updateProcessStyles.infoBlock}>
              <Text style={updateProcessStyles.label}>Tipo:</Text>
              <Text style={updateProcessStyles.value}>{processo.tipo}</Text>
            </View>

            <View style={updateProcessStyles.infoBlock}>
              <Text style={updateProcessStyles.label}>Novo Status:</Text>
              <TextInput
                style={updateProcessStyles.input}
                value={novoStatus}
                onChangeText={setNovoStatus}
                placeholder="Digite o novo status"
                placeholderTextColor="#888"
              />
            </View>

            <TouchableOpacity style={updateProcessStyles.button} onPress={handleUpdateStatus}>
              <Text style={updateProcessStyles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>

        <View style={updateProcessStyles.footerBar}>
          <HeaderOptions />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
