import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores

export const listProcessStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: COLORS.background,
  },
  card: {
    backgroundColor: "rgba(255,255,255, 0.8)",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 2,
  },
  empty: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 16,
    color: COLORS.gray,
  },
  input: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: 12,
    borderRadius: 20,
    marginLeft: 18,
    marginBottom: 8,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 0.8,
    width: 352, // ou use "100%" se o container for controlado
  },
  inputPosition: {
    paddingTop: 8,
    margin: 0,
  },
  gradientOverlayTop: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 800,
    zIndex: -1,
  },
  gradientOverlayBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 800,
    zIndex: -1,
  },
});
