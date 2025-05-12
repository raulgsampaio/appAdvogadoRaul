import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores

export const homePublic = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
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
  linkingText: {
    textDecorationLine: "underline",
    color: COLORS.card,
    paddingTop: 18,
    fontSize: 15,
  },
  displayFlex2Columns: {
    display: "flex",
    rowGap: 60,
    alignItems: "center",
    marginBottom: 70,
  },
  displayFlex2Rows: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    paddingTop: 10,
  },
  footerImg: {
    width: 28,
    height: 28,
  },
  footerText: {
    color: COLORS.card,
    fontSize: 18,
  },
  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 425,
  },
});
