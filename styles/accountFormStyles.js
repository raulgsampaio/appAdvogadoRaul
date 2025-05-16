import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores
import { FONTSIZE } from "../constants/fontSize";

export const accountFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: COLORS.backgroundColor,
    // padding: 20,
    // justifyContent: "center",
  },
  title: {
    fontSize: FONTSIZE.XL,
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
    width: "auto",
    height: 50,
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
    width: 350,
  },
  displayFlex2Columns: {
    display: "flex",
    rowGap: 60,
    alignItems: "center",
    marginBottom: 70,
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
    height: 600,
    zIndex: -1,
  },
});
