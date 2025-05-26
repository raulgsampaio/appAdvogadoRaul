import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const singleProcess = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    position: "relative",
  },
  scrollContainer: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  containerMain: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 8,
    padding: 16,
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
    marginVertical: 32,
    borderWidth: 1,
    borderColor: COLORS.gray,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoBlock: {
    marginBottom: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
    marginTop: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
