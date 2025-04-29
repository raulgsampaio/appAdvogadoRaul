import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { db } from '../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { listProcessStyles } from '../styles/listProcessStyles'; // Importando os estilos separados

export default function ListProcessScreen() {
  const [processos, setProcessos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'processos'), (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProcessos(lista);
    });

    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={listProcessStyles.card} onPress={() => navigation.navigate('UpdateProcess', { processo: item })}>
      <Text style={listProcessStyles.title}>{item.cliente}</Text>
      <Text style={listProcessStyles.subtitle}>Advogado: {item.advogado}</Text>
      <Text style={listProcessStyles.subtitle}>Tipo: {item.tipo}</Text>
      <Text style={listProcessStyles.subtitle}>Status: {item.status}</Text>
      <Text style={listProcessStyles.subtitle}>Prazo: {item.prazoDias} dias</Text>
    </TouchableOpacity>
  );

  return (
    <View style={listProcessStyles.container}>
      <FlatList
        data={processos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={listProcessStyles.empty}>Nenhum processo cadastrado.</Text>}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
