import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="search-outline" size={30} color="#C9A74B" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="refresh-outline" size={30} color="#C9A74B" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="add-circle-outline" size={30} color="#C9A74B" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person-outline" size={30} color="#C9A74B" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 2,
    borderTopColor: "#C9A74B",
  },
});
