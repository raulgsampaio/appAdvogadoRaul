import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "../components/Input";
import styles from "../components/styles";

export default function PerfilScreenBruna() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#b4913e" />
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={60} color="#fff" />
        </View>

        <Input label="Nome" />
        <Input label="E-mail" />
        <Input label="Senha" secure />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={18} color="#b4913e" />
        <Text style={styles.logoutText}>Sair do aplicativo</Text>
      </TouchableOpacity>
    </View>
  );
}
