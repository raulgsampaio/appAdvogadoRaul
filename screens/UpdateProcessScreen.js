import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updateProcessStyles } from '../styles/updateProcessStyles'; // Estilos separados

export default function UpdateProcessScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { processo } = route.params; // Recebendo o processo clicado

  const [novoStatus, setNovoStatus] = useState(processo.status);

  const handleUpdateStatus = async () => {
    if (!novoStatus) {
      Alert.alert('Erro', 'O status não pode ficar vazio.');
      return;
    }

    try {
      const processoRef = doc(db, 'processos', processo.id);
      await updateDoc(processoRef, { status: novoStatus });

      Alert.alert('Sucesso', 'Status atualizado!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o status.');
    }
  };

  return (
    <View style={updateProcessStyles.container}>
      <Text style={updateProcessStyles.title}>Atualizar Status</Text>

      <Text style={updateProcessStyles.label}>Cliente:</Text>
      <Text style={updateProcessStyles.text}>{processo.cliente}</Text>

      <Text style={updateProcessStyles.label}>Advogado:</Text>
      <Text style={updateProcessStyles.text}>{processo.advogado}</Text>

      <Text style={updateProcessStyles.label}>Novo Status:</Text>
      <TextInput
        style={updateProcessStyles.input}
        value={novoStatus}
        onChangeText={setNovoStatus}
        placeholder="Digite o novo status"
      />

      <TouchableOpacity style={updateProcessStyles.button} onPress={handleUpdateStatus}>
        <Text style={updateProcessStyles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
