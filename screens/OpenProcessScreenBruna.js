import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ButtonGold = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.buttonGold, style]}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const ButtonOutline = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonOutline}>
    <Text style={styles.buttonOutlineText}>{title}</Text>
  </TouchableOpacity>
);

const OpenProcessScreenBruna = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Nome do Processo</Text>
        <View style={styles.headerButtons}>
          <ButtonGold title="Status do Processo" onPress={() => {}} />
          <ButtonOutline
            title="Editar"
            onPress={() => navigation.navigate("Editar")}
          />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Informações Gerais:</Text>
        <Text>Tipo de Processo:</Text>
        <Text>Data de Criação:</Text>
        <Text>Prazo:</Text>
        <Text>Cliente Vinculado:</Text>
        <Text>Advogado Vinculado:</Text>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Historico de Status
        </Text>
        {[1, 2, 3].map((_, idx) => (
          <View key={idx} style={styles.statusRow}>
            <ButtonGold
              title="Status"
              onPress={() => {}}
              style={styles.statusButton}
            />
            <Text style={{ marginLeft: 8 }}>Nome</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <ButtonGold
          title="Voltar"
          onPress={() => {}}
          style={styles.footerButton}
        />
        <ButtonOutline
          title="Atualizar Status"
          onPress={() => navigation.navigate("Atualizar")}
        />
        <ButtonGold
          title="Encerrar Processo"
          onPress={() => navigation.navigate("Encerrar")}
          style={styles.footerButton}
        />
      </View>
    </ScrollView>
  );
};

const TelaPlaceholder = ({ route }) => (
  <View style={styles.centered}>
    <Text style={styles.title}>Tela: {route.name}</Text>
  </View>
);
