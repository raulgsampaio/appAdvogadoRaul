import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { loginStyles } from '../styles/loginStyles'; // Importando os estilos separados

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.replace('Home'); // Leva direto para Home após "login"
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Tela de Login</Text>

      <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
