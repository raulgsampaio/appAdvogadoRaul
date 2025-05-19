import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HeaderOptions({ children }) {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer} onPress={goToHome}>
        <Image
          style={styles.img}
          source={require("../assets/leandro-silva.png")}
        />
      </TouchableOpacity>
      <View style={styles.optionsContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "rgba(255,255,255, 0.6)",
    borderRadius: 8,
    borderColor: "gray",
  },
  logoContainer: {
    marginRight: 50,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#0d0b05",
  },
  optionsContainer: {
    marginLeft: 5,
  },
});
