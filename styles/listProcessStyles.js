import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors"; // Importando o esquema de cores
import { FONTSIZE } from "../constants/fontSize";

export const listProcessStyles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
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
    textAlign: "left",
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
    marginBottom: 2,
    marginTop: 8,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 0.8,
    width: '90%',
    alignSelf: 'center',
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
  displayFlex2rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 10,
  },
  innerAlign: {
    width: 160,
  },
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  loadingText: {
    fontSize: FONTSIZE.big,
    color: COLORS.card,
  },
  footerBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
