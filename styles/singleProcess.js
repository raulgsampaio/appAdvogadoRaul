import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const singleProcess = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  containerMainPosition: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
    rowGap: 50,
  },
  containerMain: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.card,
    width: 350,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    color: COLORS.card,
    marginBottom: 20,
    paddingBottom: 40,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 10,
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
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 20,
    },
    shadowOpacity: 0.7,
    shadowRadius: 50,
    elevation: 10,
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
  footerBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
