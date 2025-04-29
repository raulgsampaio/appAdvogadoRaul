import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { homeStyles } from '../styles/homeStyles'; // Importando estilos separados

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToCreateProcess = () => {
    navigation.navigate('CreateProcess');
  };

  const goToListProcess = () => {
    navigation.navigate('ListProcess');
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Bem-vindo ao App de Processos</Text>

      <TouchableOpacity style={homeStyles.button} onPress={goToCreateProcess}>
        <Text style={homeStyles.buttonText}>Cadastrar Novo Processo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.button} onPress={goToListProcess}>
        <Text style={homeStyles.buttonText}>Ver Processos</Text>
      </TouchableOpacity>
    </View>
  );
}
