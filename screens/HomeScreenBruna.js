// HOME SCREEN DA BRUNA

import { View, FlatList, StyleSheet, Image } from "react-native";
import ProcessoItem from "../components/ProcessoItem";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

export default function HomeScreenBruna() {
  const processos = [{ id: "1", nome: "", status: "", registro: "" }];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Leandro Silva - Logo 6.jpg")}
          style={styles.logo}
        />
      </View>

      <Header />

      <FlatList
        data={processos}
        renderItem={({ item }) => (
          <ProcessoItem
            nome={item.nome}
            registro={item.resgitro}
            status={item.status}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logoContainer: {
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#C9A74B",
  },
  logo: {
    width: 80,
    height: 80,
    padding: 2,
    resizeMode: "contain",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
});
