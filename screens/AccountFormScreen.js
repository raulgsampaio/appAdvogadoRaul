import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";
import { accountFormStyles } from "../styles/accountFormStyles"; // Estilos separados

export default function AccountFormScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSave = async () => {
    if (!nome || !ocupacao || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "usuario"), {
        nome,
        ocupacao,
        email,
        senha,
      });

      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      Alert.alert("Erro", "Não foi possível salvar o usuário.");
    }
  };

  return (
    <View style={accountFormStyles.container}>
      {/* <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        style={homePublic.gradientOverlay}
        start={{ x: 0, y: 0.6 }}
        end={{ x: 0, y: 0 }}
        locations={[0.45, 0.75]}
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        style={homePublic.gradientOverlay}
        start={{ x: 0, y: 0.6 }}
        end={{ x: 0, y: 0 }}
        locations={[0.45, 0.75]}
      /> */}
      <View style={accountFormStyles.logoWithTextSpaceAround}>
        <Image
          style={accountFormStyles.img}
          source={require("../assets/leandro-silva.png")}
        />
        <Text style={accountFormStyles.title}>Cadastres-se para logar</Text>
      </View>
      <View>
        <View style={accountFormStyles.inputFieldsSpaceBetween}>
          <ScrollView>
            <TextInput
              style={accountFormStyles.input}
              placeholder="Nome do usuário"
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={accountFormStyles.input}
              placeholder="Ocupação"
              value={ocupacao}
              onChangeText={setOcupacao}
            />
            <TextInput
              style={accountFormStyles.input}
              placeholder="Digite seu melhor e-mail"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={accountFormStyles.input}
              placeholder="Digite uma senha forte"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
            />
            <TextInput
              style={accountFormStyles.input}
              placeholder="Confirme sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={accountFormStyles.button}
              onPress={handleSave}
            >
              <Text style={accountFormStyles.buttonText}>Salvar Cadastro</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
