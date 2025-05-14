import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores

export const accountFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // padding: 20,
    // justifyContent: "center",
    display: "flex",
    rowGap: 70,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: COLORS.text,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
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
  },
  buttonText: {
    color: COLORS.card,
    fontSize: 16,
    fontWeight: "bold",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "white",
    backgroundColor: "#0d0b05",
  },
  logoWithTextSpaceAround: {
    flexDirection: "column",
    justifyContent: "space-around",
    rowGap: 20,
    alignItems: "center",
    paddingTop: 20,
  },
  inputFieldsSpaceBetween: {
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 10,
    width: 300,
  },
});
