import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderOptions from "../components/HeaderOptions";
import { singleProcess } from "../styles/singleProcess";

export default function SingleProcessScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { processo } = route.params;

  const [processoAtualizado, setProcessoAtualizado] = useState(processo);

  useFocusEffect(
    useCallback(() => {
      const fetchProcesso = async () => {
        const docRef = doc(db, "processos", processo.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProcessoAtualizado({ id: docSnap.id, ...docSnap.data() });
        }
      };

      fetchProcesso();
    }, [processo.id])
  );

  const goToUpdateScreen = () => {
    navigation.navigate("UpdateProcess", { processo: processoAtualizado });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={singleProcess.container} edges={["top", "bottom"]} mode="margin">
        <LinearGradient
          colors={["#000000", "#2b1d0e", "#b68d40", "#e7c57b"]}
          style={StyleSheet.absoluteFill}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={singleProcess.scrollContainer}>
            <Text style={singleProcess.title}>
              Processo de {processoAtualizado.cliente}
            </Text>

            <View style={singleProcess.containerMain}>
              <View style={singleProcess.infoBlock}>
                <Text style={singleProcess.label}>Cliente:</Text>
                <Text style={singleProcess.text}>{processoAtualizado.cliente}</Text>
              </View>

              <View style={singleProcess.infoBlock}>
                <Text style={singleProcess.label}>Advogado:</Text>
                <Text style={singleProcess.text}>{processoAtualizado.advogado}</Text>
              </View>

              <View style={singleProcess.infoBlock}>
                <Text style={singleProcess.label}>Tipo:</Text>
                <Text style={singleProcess.text}>{processoAtualizado.tipo}</Text>
              </View>

              <View style={singleProcess.infoBlock}>
                <Text style={singleProcess.label}>Status:</Text>
                <Text style={singleProcess.text}>{processoAtualizado.status}</Text>
              </View>

              <View style={singleProcess.infoBlock}>
                <Text style={singleProcess.label}>Prazo (dias):</Text>
                <Text style={singleProcess.text}>{processoAtualizado.prazoDias}</Text>
              </View>

              <TouchableOpacity style={singleProcess.button} onPress={goToUpdateScreen}>
                <Text style={singleProcess.buttonText}>Atualizar Processo</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View style={singleProcess.footerBar}>
          <HeaderOptions />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
