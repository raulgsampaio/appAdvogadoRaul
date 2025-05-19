import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { db } from "../config/firebase";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeaderOptions from "../components/HeaderOptions";
import { listProcessStyles } from "../styles/listProcessStyles"; // Importando os estilos separados

export default function ListProcessScreen() {
  const [processos, setProcessos] = useState([]);
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);
  const navigation = useNavigation();

  const handleSearch = useCallback(
    (value) => {
      const resultadosFiltrados = processos.filter(
        (processo) =>
          processo.cliente.toLowerCase().includes(value.toLowerCase()) ||
          processo.tipo.toLowerCase().includes(value.toLowerCase())
      );
      setResultadosFiltrados(resultadosFiltrados);
    },
    [processos]
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "processos"), (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProcessos(lista);
      setResultadosFiltrados(lista);
    });

    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={listProcessStyles.card}
      onPress={() => navigation.navigate("UpdateProcess", { processo: item })}
    >
      <Text style={listProcessStyles.title}>{item.cliente}</Text>
      <Text style={listProcessStyles.subtitle}>Advogado: {item.advogado}</Text>
      <Text style={listProcessStyles.subtitle}>Tipo: {item.tipo}</Text>
      <Text style={listProcessStyles.subtitle}>Status: {item.status}</Text>
      <Text style={listProcessStyles.subtitle}>
        Prazo: {item.prazoDias} dias
      </Text>
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
          placeholder="search"
          placeholderTextColor="#ccc"
          autoCapitalize="none"
          onChangeText={handleSearch}
        />
        <FlatList
          data={resultadosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text style={listProcessStyles.empty}>
              Nenhum processo cadastrado.
            </Text>
          }
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
