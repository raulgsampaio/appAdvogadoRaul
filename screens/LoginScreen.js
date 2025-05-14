import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth from "../config/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginStyles } from "../styles/loginStyles"; // Importando os estilos separados

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Login feito com sucesso!");
      navigation.replace("Home");
    } catch (error) {
      Alert.alert("Erro ao fazer login", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={loginStyles.container}>
      <View>
        <Image
          style={loginStyles.img}
          source={require("../assets/leandro-silva.png")}
        />
        <Text>Gerenciador de Processos</Text>
      </View>
      <View>
        <TextInput
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Entrando..." : "Entrar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
