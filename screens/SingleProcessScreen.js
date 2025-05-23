import { View, Text, TouchableOpacity, Alert } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
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
  const { processo } = route.params; // Recebendo o processo clicado

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
      <SafeAreaView
        style={singleProcess.container}
        edges={["top", "bottom"]}
        mode="margin"
      >
        <LinearGradient
          colors={["rgba(200,166,84,0.9)", "transparent"]}
          style={singleProcess.gradientOverlayTop}
          start={{ x: 0, y: 0.7 }}
          end={{ x: 0, y: 0 }}
          locations={[0.6, 1]}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.9)", "transparent"]}
          style={singleProcess.gradientOverlayBottom}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.4, 1]}
        />
        <View style={singleProcess.containerMainPosition}>
          <Text style={singleProcess.title}>
            Processo {processoAtualizado.cliente}
          </Text>

          <View style={singleProcess.containerMain}>
            <Text style={singleProcess.label}>Cliente:</Text>
            <Text style={singleProcess.text}>{processoAtualizado.cliente}</Text>

            <Text style={singleProcess.label}>Advogado:</Text>
            <Text style={singleProcess.text}>
              {processoAtualizado.advogado}
            </Text>

            <Text style={singleProcess.label}>Tipo:</Text>
            <Text style={singleProcess.text}>{processoAtualizado.tipo}</Text>

            <Text style={singleProcess.label}>Status:</Text>
            <Text style={singleProcess.text}>{processoAtualizado.status}</Text>

            <Text style={singleProcess.label}>Prazo:</Text>
            <Text style={singleProcess.text}>
              {processoAtualizado.prazoDias}
            </Text>
          </View>
          <TouchableOpacity
            style={singleProcess.button}
            onPress={goToUpdateScreen}
          >
            <Text style={singleProcess.buttonText}>Atualizar Processo</Text>
          </TouchableOpacity>
        </View>
        <View style={singleProcess.footerBar}>
          <HeaderOptions />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
