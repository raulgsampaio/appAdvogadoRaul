import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderOptions from "../components/HeaderOptions";
import { listProcessStyles } from "../styles/listProcessStyles";

export default function ListProcessScreen() {
  const [processos, setProcessos] = useState([]);
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const handleSearch = useCallback(
    (value) => {
      const lowerValue = value.toLowerCase();
      const resultados = processos.filter((processo) =>
        (processo.numero?.toLowerCase() || "").includes(lowerValue) ||
        (processo.cliente?.toLowerCase() || "").includes(lowerValue) ||
        (processo.advogado?.toLowerCase() || "").includes(lowerValue) ||
        (processo.status?.toLowerCase() || "").includes(lowerValue)
      );
      setResultadosFiltrados(resultados);
    },
    [processos]
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "processos_2"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProcessos(lista);
      setResultadosFiltrados(lista);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={listProcessStyles.card}
      onPress={() => navigation.navigate("SingleProcess", { processo: item })}
    >
      <Text style={listProcessStyles.title}>
        {item.numero ? `#${item.numero}` : "Processo"} - {item.cliente}
      </Text>
      <View style={listProcessStyles.displayFlex2rows}>
        <View>
          <Text style={listProcessStyles.subtitle}>Advogado: {item.advogado}</Text>
          <Text style={listProcessStyles.subtitle}>Tipo: {item.tipo}</Text>
        </View>
        <View style={listProcessStyles.innerAlign}>
          <Text style={listProcessStyles.subtitle}>Status: {item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={listProcessStyles.container}
        edges={["top", "bottom"]}
        mode="margin"
      >
        <LinearGradient
          colors={["rgba(200,166,84,0.9)", "transparent"]}
          style={listProcessStyles.gradientOverlayTop}
          start={{ x: 0, y: 0.7 }}
          end={{ x: 0, y: 0 }}
          locations={[0.6, 1]}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.9)", "transparent"]}
          style={listProcessStyles.gradientOverlayBottom}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.4, 1]}
        />

        <TextInput
          style={listProcessStyles.input}
          placeholder="Pesquisar por número, cliente, advogado ou status..."
          placeholderTextColor="#ccc"
          autoCapitalize="none"
          onChangeText={handleSearch}
        />

        {loading ? (
          <View style={listProcessStyles.loadingView}>
            <Text style={listProcessStyles.loadingText}>Carregando Processos...</Text>
          </View>
        ) : (
          <FlatList
            data={resultadosFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={
              <Text style={listProcessStyles.empty}>
                Nenhum processo encontrado.
              </Text>
            }
            contentContainerStyle={{ padding: 16 }}
          />
        )}

        <View style={listProcessStyles.footerBar}>
          <HeaderOptions />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
