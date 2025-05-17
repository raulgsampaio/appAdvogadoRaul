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
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
    marginBottom: -50,
  },
  logoContainer: {
    paddingLeft: 50,
    paddingBottom: 80,
  },
  img: {
    width: 50,
    height: 50,
  },
  optionsContainer: {
    paddingRight: 100,
  },
});
