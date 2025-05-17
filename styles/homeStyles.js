import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando seu esquema de cores
import { FONTSIZE } from "../constants/fontSize";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  innerContainer: {
    // flex: 1,
    // backgroundColor: COLORS.background,
    justifyContent: "space-arround",
    alignItems: "center",
    width: 400,
    // padding: 20,
  },
  title: {
    fontSize: FONTSIZE.XL,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 5, // Separação entre os botões
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 20,
    },
    shadowOpacity: 0.7,
    shadowRadius: 50,
    elevation: 10,
  },
  buttonSair: {
    backgroundColor: "#787a40",
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 8,
    marginVertical: 45, // Separação entre os botões
    shadowColor: "white",
    shadowOffset: {
      width: 50,
      height: 20,
    },
    shadowOpacity: 0.7,
    shadowRadius: 50,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonAlignRight: {
    width: 360,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  displayFlex2Columns: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    rowGap: 15,
    alignItems: "center",
    // marginBottom: 70,
  },
  displayFlex3Columns: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: 40,
    alignItems: "center",
    // marginBottom: 70,
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "lightgray",
    backgroundColor: "#0d0b05",
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
