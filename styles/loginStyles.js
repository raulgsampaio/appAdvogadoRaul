import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    // justifyContent: "center",
    alignItems: "center",
    // padding: 20,
    display: "flex",
    rowGap: 50,
  },
  title: {
    fontSize: 24,
    color: COLORS.text,
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: COLORS.unableButton,
  },
  buttonText: {
    color: COLORS.card,
    fontSize: 16,
    fontWeight: "bold",
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
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: COLORS.primary,
    // backgroundColor: '#e1f7fa',
  },
});
