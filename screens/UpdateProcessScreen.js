import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderOptions from "../components/HeaderOptions";
import { updateProcessStyles } from "../styles/updateProcessStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";

export default function UpdateProcessScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { processo } = route.params;

  const [novoStatus, setNovoStatus] = useState(processo.status);
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

  const handleUpdateStatus = async () => {
    if (!novoStatus) {
      Alert.alert("Erro", "O status não pode ficar vazio.");
      return;
    }

    try {
      const processoRef = doc(db, "processos_2", processo.id);
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
            Atualizar Processo {processo.numero}
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
              <Picker
                selectedValue={novoStatus}
                onValueChange={(itemValue) => setNovoStatus(itemValue)}
                style={[updateProcessStyles.input, { height: 52, paddingVertical: 0 }]}
              >
                <Picker.Item label="Selecione um status" value="" />
                {statusList.map((s, i) => (
                  <Picker.Item label={s} value={s} key={i} />
                ))}
              </Picker>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 12, marginTop: 24 }}>
              <TouchableOpacity style={[updateProcessStyles.button, { flex: 1 }]} onPress={handleUpdateStatus}>
                <Text style={updateProcessStyles.buttonText}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[updateProcessStyles.cancelButton, { flex: 1 }]} onPress={() => navigation.goBack()}>
                <Text style={updateProcessStyles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <View style={updateProcessStyles.footerBar}>
          <HeaderOptions />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
