import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { homeStyles } from "../styles/homeStyles"; // Importando estilos separados
import { COLORS } from "../constants/colors";
import HeaderOptions from "../components/HeaderOptions";

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToCreateProcess = () => {
    navigation.navigate("CreateProcess");
  };

  const goToListProcess = () => {
    navigation.navigate("ListProcess");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={homeStyles.container}
        edges={["top", "bottom"]}
        mode="margin"
      >
        <LinearGradient
          colors={["rgba(200,166,84,0.9)", "transparent"]}
          style={homeStyles.gradientOverlayTop}
          start={{ x: 0, y: 0.7 }}
          end={{ x: 0, y: 0 }}
          locations={[0.6, 1]}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.9)", "transparent"]}
          style={homeStyles.gradientOverlayBottom}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.4, 1]}
        />
        <View style={homeStyles.innerContainer}>
          <HeaderOptions>
            <View style={homeStyles.buttonAlignRight}>
              <TouchableOpacity
                style={homeStyles.buttonSair}
                onPress={goToLogin}
              >
                <Text style={homeStyles.buttonText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </HeaderOptions>
          <View style={homeStyles.displayFlex3Columns}>
            <View style={homeStyles.displayFlex2Columns}>
              <Image
                style={homeStyles.img}
                source={require("../assets/leandro-silva.png")}
              />
              <Text style={homeStyles.title}>Gerenciador de Processos</Text>
            </View>

            <View style={homeStyles.displayFlex2Columns}>
              <MaterialCommunityIcons
                name="file-plus-outline"
                size={120}
                color={COLORS.card}
              />
              <TouchableOpacity
                style={homeStyles.button}
                onPress={goToCreateProcess}
              >
                <Text style={homeStyles.buttonText}>
                  Cadastrar Novo Processo
                </Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyles.displayFlex2Columns}>
              <MaterialCommunityIcons
                name="file-eye-outline"
                size={120}
                color={COLORS.card}
              />
              <TouchableOpacity
                style={homeStyles.button}
                onPress={goToListProcess}
              >
                <Text style={homeStyles.buttonText}>Ver Processos</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={homeStyles.buttonAlignRight}>
            <TouchableOpacity style={homeStyles.buttonSair} onPress={goToLogin}>
              <Text style={homeStyles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
