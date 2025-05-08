import { View, Text, StyleSheet } from "react-native";

export default function ProcessoItem({ nome, status, registro }) {
  return (
    <View style={styles.item}>
      <View style={styles.column}>
        <Text style={styles.nomeProcesso}>Nome do processo</Text>
        <Text style={styles.registroAutoria}>Registro de autoria</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.status}>Status</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  column: {
    flex: 1,
  },
  nomeProcesso: {
    fontWeight: "bold",
    fontSize: 20,
  },
  registroAutoria: {
    fontWeight: "bold",
    fontSize: 17,
  },
  status: {
    fontSize: 20,
    textAlign: "right",
  },
});
