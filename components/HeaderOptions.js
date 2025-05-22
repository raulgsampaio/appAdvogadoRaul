import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function HeaderOptions() {
  const navigation = useNavigation();
  const route = useRoute();

  const [isLoggingOutPressed, setIsLoggingOutPressed] = useState(false);

  const goToCreateProcess = () => {
    navigation.navigate("CreateProcess");
  };

  const goToListProcess = () => {
    navigation.navigate("ListProcess");
  };

  const goToLogin = () => {
    setIsLoggingOutPressed(true);
    setTimeout(() => {
      setIsLoggingOutPressed(false);
      navigation.navigate("Login");
    }, 300);
  };

  const getTextStyle = (active) => ({
    color: active ? "white" : "gray",
    fontSize: 10,
  });

  const isCreateProcessScreen = route.name === "CreateProcess";

  const isListProcessScreen = route.name === "ListProcess";

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/leandro-silva.png")}
      />

      <View style={styles.displayFlex2Columns}>
        <TouchableOpacity onPress={goToCreateProcess}>
          <MaterialCommunityIcons
            name="file-plus-outline"
            size={30}
            color={isCreateProcessScreen ? "white" : "gray"}
          />
        </TouchableOpacity>
        <Text style={getTextStyle(isCreateProcessScreen)}>Criar Processo</Text>
      </View>
      <View style={styles.displayFlex2Columns}>
        <TouchableOpacity onPress={goToListProcess}>
          <MaterialCommunityIcons
            name="file-eye-outline"
            size={30}
            color={isListProcessScreen ? "white" : "gray"}
          />
        </TouchableOpacity>
        <Text style={getTextStyle(isListProcessScreen)}>Ver Processo</Text>
      </View>
      <View style={styles.displayFlex2Columns}>
        <TouchableOpacity
          onPress={goToLogin}
          onPressIn={() => setIsLoggingOutPressed(true)}
          onPressOut={() => setIsLoggingOutPressed(false)}
        >
          <MaterialCommunityIcons
            name="logout"
            size={30}
            color={isLoggingOutPressed ? "white" : "gray"}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: isLoggingOutPressed ? "white" : "gray",
            fontSize: 10,
          }}
        >
          Sair
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "rgba(0,0,0, 0.85)",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "gray",
    columnGap: 15,
    // height: 10,
  },
  // logoContainer: {
  //   marginRight: 50,
  // },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "gray",
    backgroundColor: "#0d0b05",
  },
  // optionsContainer: {
  //   marginLeft: 5,
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   columnGap: 80,
  // },
  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
  },
  displayFlex2Columns: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
