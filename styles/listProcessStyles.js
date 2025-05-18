import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores

export const listProcessStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  card: {
    backgroundColor: COLORS.card,
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
    borderRadius: 8,
    marginLeft: 20,
    marginBottom: 8,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    width: 250, // ou use "100%" se o container for controlado
  },
  position: {
    paddingTop: 8,
    margin: 0,
  },
});
