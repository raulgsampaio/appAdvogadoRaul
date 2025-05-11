import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createProcessStyles } from "../styles/createProcessStyles";

export default function HomeScreenPublic() {
  const navigation = useNavigation();

  const navLogin = () => {
    navigation.navigate("Login");
  };

  const navAccountForm = () => {
    navigation.navigate("AccountForm");
  };

  return (
    <ImageBackground
      source={require("../assets/justice-statue.png")}
      style={}
      resizeMode="cover"
    >
      <View style={}>
        <TouchableOpacity onPress={navLogin} style={}>
          <Text style={}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navAccountForm}
          style={}
        >
          <Text style={}>Cadastre-se</Text>
        </TouchableOpacity>
        {/* CRIAR VIEW COM LOGO + LEANDRO SILVA */}
      </View>
    </ImageBackground>
  );
}
