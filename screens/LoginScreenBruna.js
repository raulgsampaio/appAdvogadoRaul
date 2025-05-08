import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Button,
} from "react-native";
import styles from "../components/styles";

export default function LoginScreenBruna() {
  const [text_email, setText_email] = useState("");
  const [text_senha, setText_senha] = useState("");

  return (
    <View style={styles.containerLogin}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />

      <Image
        source={require("../assets/Leandro Silva - Logo 2.jpg")}
        style={styles.logoLogin}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo</Text>

        <TextInput
          style={styles.input_login}
          placeholder="Digite seu e-mail"
          placeholderTextColor="gray"
          value={text_email}
          onChangeText={setText_email}
        />

        <TextInput
          style={styles.input_login}
          placeholder="Digite sua senha"
          placeholderTextColor="gray"
          value={text_senha}
          onChangeText={setText_senha}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.entrarButton}>
            <Text style={styles.entrarText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.Flex_column2}>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.texto_forgotpassword}>
            {" "}
            Não possui uma conta? Cadastre-se{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
