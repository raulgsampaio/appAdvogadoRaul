import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores

export const createProcessStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    marginHorizontal: 20,
  },
  containerInput:{
    justifyContent: 'center',
    marginTop: 50,
  },
  containerSafe: {
    flex: 1,
    //padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    marginTop: 50,
    textAlign: "center",
  },
  input: {
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    borderColor: COLORS.gray,
    borderWidth: 1,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: COLORS.card,
    fontSize: 16,
    fontWeight: "bold",
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
