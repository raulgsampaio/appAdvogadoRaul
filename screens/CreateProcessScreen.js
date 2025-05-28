import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
} from "react-native";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import HeaderOptions from "../components/HeaderOptions";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { createProcessStyles } from "../styles/createProcessStyles";

export default function CreateProcessScreen() {
  const navigation = useNavigation();

  const [numero, setNumero] = useState("");
  const [cliente, setCliente] = useState("");
  const [advogado, setAdvogado] = useState("");
  const [tipo, setTipo] = useState("");
  const [status, setStatus] = useState("");
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    const fetchStatusList = async () => {
      try {
        const snapshot = await getDocs(collection(db, "status_lista"));
        const list = snapshot.docs.map(doc => doc.data().status);
        setStatusList(list);
      } catch (error) {
        console.error("Erro ao buscar status:", error);
      }
    };
    fetchStatusList();
  }, []);

  const handleSave = async () => {
    if (!numero || !cliente || !advogado || !tipo || !status) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "processos_2"), {
        numero,
        cliente,
        advogado,
        tipo,
        status,
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
      <SafeAreaView style={createProcessStyles.containerSafe} edges={["top", "bottom"]} mode="margin">
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

        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={{ ...createProcessStyles.container, flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={createProcessStyles.title}>Cadastrar Processo</Text>

            <View style={createProcessStyles.containerInput}>
              <TextInput
                style={createProcessStyles.input}
                placeholder="Número do Processo"
                value={numero}
                onChangeText={setNumero}
              />

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

              <Picker
                selectedValue={status}
                onValueChange={(itemValue) => setStatus(itemValue)}
                style={{ backgroundColor: "#fff", marginBottom: 10 }}
              >
                <Picker.Item label="Selecione um status" value="" />
                {statusList.map((s, i) => (
                  <Picker.Item label={s} value={s} key={i} />
                ))}
              </Picker>
            </View>

            <TouchableOpacity style={createProcessStyles.button} onPress={handleSave}>
              <Text style={createProcessStyles.buttonText}>Salvar Processo</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <HeaderOptions />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
