import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { accountFormStyles } from "../styles/accountFormStyles"; // Estilos separados
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AccountFormScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");

  const handleSave = async () => {
    if (!nome || !ocupacao || !email || !senha || !confirmeSenha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (senha != confirmeSenha) {
      return Alert.alert(
        "As senhas não são compatíveis",
        "Digite a senha corretamente em seus respectivos campos."
      );
    }

    try {
      await addDoc(collection(db, "usuario"), {
        nome,
        ocupacao,
        email,
        senha,
        confirmeSenha,
      });

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      Alert.alert("Erro", "Não foi possível salvar o usuário.");
    }
  };

  const handleGoBack = async () => {
    navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={accountFormStyles.container}
        edges={["top", "bottom"]}
        mode={"margin"}
      >
        <LinearGradient
          colors={["rgba(200,166,84,0.9)", "transparent"]}
          style={accountFormStyles.gradientOverlayTop}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.7 }}
          locations={[0.6, 1]}
        />
        <LinearGradient
          colors={["rgba(110,91,46,0.9)", "transparent"]}
          style={accountFormStyles.gradientOverlayBottom}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          locations={[0.4, 1]}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={accountFormStyles.displayFlex2Columns}
          >
            <View style={accountFormStyles.logoWithTextSpaceAround}>
              <TouchableOpacity onPress={handleGoBack}>
                <Image
                  style={accountFormStyles.img}
                  source={require("../assets/leandro-silva.png")}
                />
              </TouchableOpacity>
              <Text style={accountFormStyles.title}>
                Cadastres-se para logar
              </Text>
            </View>
            <View style={accountFormStyles.inputFieldsSpaceBetween}>
              <TextInput
                style={accountFormStyles.input}
                placeholder="Nome do usuário"
                value={nome}
                onChangeText={setNome}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <TextInput
                style={accountFormStyles.input}
                placeholder="Ocupação"
                value={ocupacao}
                onChangeText={setOcupacao}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <TextInput
                style={accountFormStyles.input}
                placeholder="Digite seu melhor e-mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <TextInput
                style={accountFormStyles.input}
                placeholder="Digite uma senha forte"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <TextInput
                style={accountFormStyles.input}
                placeholder="Confirme sua senha"
                value={confirmeSenha}
                onChangeText={setConfirmeSenha}
                secureTextEntry={true}
                autoCapitalize="none"
                returnKeyType="next"
              />

              <TouchableOpacity
                style={accountFormStyles.button}
                onPress={handleSave}
              >
                <Text style={accountFormStyles.buttonText}>
                  Salvar Cadastro
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
