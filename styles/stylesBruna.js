import { StyleSheet } from "react-native";

const COLORS = {
  card: "#f2f2f2",
  primary: "#c8a654", // dourado
  text: "#000000",
  background: "#ffffff",
  gray: "#999999",
};

export default StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  containerHome: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 30,
  },
  card: {
    width: "100%",
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: COLORS.text,
    textAlign: "center",
  },

  input_login: {
    height: 40,
    borderColor: "C9A74B",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },

  logoLogin: {
    width: 300,
    height: 260,
    alignItems: "center",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  logoHome: {
    width: 150,
    height: 150,
  },

  cardProcess: {
    width: "100%",
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  entrarButton: {
    backgroundColor: "#C9A74B",
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
    width: "60%",
    alignItems: "center",
  },
  entrarText: {
    color: "#fff",
    fontWeight: "bold",
  },

  containerButton: {
    alignItems: "center",
  },

  text1: {
    fontSize: 30,
    fontFamily: "noelan",
    textAlign: "center",
  },

  texto_cadastro: {
    flex: 0.5,
    color: "C9A74B",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  Flex_column2: {
    display: "flex",
    rowGap: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 43,
  },
});
