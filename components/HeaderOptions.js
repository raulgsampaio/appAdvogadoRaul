import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HeaderOptions({ children }) {
  const navigation = useNavigation();
  const route = useRoute();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const goToCreateProcess = () => {
    navigation.navigate("CreateProcess");
  };

  const goToListProcess = () => {
    navigation.navigate("ListProcess");
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const isCreateProcessScreen = route.name === "CreateProcess";

  const isListProcessScreen = route.name === "ListProcess";

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(240,240,240, 0.9)", "transparent"]}
        style={styles.gradientOverlay}
        start={{ x: 0, y: 0.6 }}
        end={{ x: 0, y: 0 }}
        locations={[0.3, 1]}
      />
      <TouchableOpacity onPress={goToHome}>
        <Image
          style={styles.img}
          source={require("../assets/leandro-silva.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCreateProcess}>
        <MaterialCommunityIcons
          name="file-plus-outline"
          size={40}
          color={isCreateProcessScreen ? "white" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToListProcess}>
        <MaterialCommunityIcons
          name="file-eye-outline"
          size={40}
          color={isListProcessScreen ? "gray" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <MaterialCommunityIcons name="logout" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(207,207,207, 0.9)",
    borderRadius: 8,
    borderWidth: 0.8,
    borderColor: "gray",
    columnGap: 60,
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
});
