import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { homePublic } from "../styles/homePublic";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../config/firebase";

export default function HomeScreenPublic() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace("Home");
    } catch (error) {
      console.error("Erro no login:", error);
      Alert.alert("Erro", "E-mail ou senha inválidos.");
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert("Erro", "Informe seu e-mail para redefinir a senha.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Verifique seu e-mail", "Enviamos um link para redefinir sua senha.");
    } catch (error) {
      console.error("Erro ao enviar redefinição de senha:", error);
      Alert.alert("Erro", "Não foi possível enviar o e-mail. Verifique o endereço digitado.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={require("../assets/justice-statue.png")}
          style={homePublic.container}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.9)", "transparent"]}
            style={homePublic.gradientOverlay}
            start={{ x: 0, y: 0.6 }}
            end={{ x: 0, y: 0 }}
            locations={[0.45, 0.75]}
          />
          <View style={homePublic.displayFlex2Columns}>
            <View>
              <TextInput
                style={homePublic.input}
                placeholder="E-mail"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={homePublic.input}
                placeholder="Senha"
                placeholderTextColor="#ccc"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />

              <TouchableOpacity onPress={handleLogin} style={homePublic.button}>
                <Text style={homePublic.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePasswordReset}>
                <Text style={homePublic.linkingText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

            <View style={homePublic.displayFlex2Rows}>
              <Image
                style={homePublic.footerImg}
                source={require("../assets/leandro-silva.png")}
              />
              <View style={homePublic.footerTextAlign}>
                <Text style={homePublic.footerText}>LEANDRO SILVA</Text>
                <Text style={homePublic.footerTextSmall}>
                  Advogados e Associados
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
