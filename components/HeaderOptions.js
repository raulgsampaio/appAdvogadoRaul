import { View, Image, StyleSheet } from "react-native";

export default function HeaderOptions({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.img}
          source={require("../assets/leandro-silva.png")}
        />
      </View>
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
    backgroundColor: "#6e5b2e",
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
    marginLeft: 10,
  },
});
