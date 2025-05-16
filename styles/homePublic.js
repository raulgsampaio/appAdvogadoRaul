import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores
import { FONTSIZE } from "../constants/fontSize";

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
    fontSize: FONTSIZE.big,
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
    columnGap: 20,
    paddingTop: 10,
  },
  footerImg: {
    width: 50,
    height: 50,
  },
  footerText: {
    color: COLORS.card,
    fontSize: FONTSIZE.large,
  },
  footerTextSmall: {
    color: COLORS.card,
    fontSize: FONTSIZE.normal,
  },
  footerTextAlign: {
    alignItems: "center",
  },
  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 425,
  },
});
