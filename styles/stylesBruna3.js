import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#C9A74B",
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#C9A74B",
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
    width: "60%",
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: "#C9A74B",
    marginLeft: 8,
  },
});
