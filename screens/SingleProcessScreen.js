import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { updateProcessStyles } from "../styles/updateProcessStyles"; // Estilos separados

export default function SingleProcessScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { processo } = route.params; // Recebendo o processo clicado

  const goToUpdateScreen = () => {
    navigation.navigate("UpdateProcess", { processo });
  };

  return (
    <View style={updateProcessStyles.container}>
      <Text style={updateProcessStyles.title}>Processo {processo.cliente}</Text>

      <Text style={updateProcessStyles.label}>Cliente:</Text>
      <Text style={updateProcessStyles.text}>{processo.cliente}</Text>

      <Text style={updateProcessStyles.label}>Advogado:</Text>
      <Text style={updateProcessStyles.text}>{processo.advogado}</Text>

      <Text style={updateProcessStyles.label}>Tipo:</Text>
      <Text style={updateProcessStyles.text}>{processo.tipo}</Text>

      <Text style={updateProcessStyles.label}>Status:</Text>
      <Text style={updateProcessStyles.text}>{processo.status}</Text>

      <Text style={updateProcessStyles.label}>Prazo:</Text>
      <Text style={updateProcessStyles.text}>{processo.prazoDias}</Text>

      <TouchableOpacity
        style={updateProcessStyles.button}
        onPress={goToUpdateScreen}
      >
        <Text style={updateProcessStyles.buttonText}>Atualizar Processo</Text>
      </TouchableOpacity>
    </View>
  );
}
