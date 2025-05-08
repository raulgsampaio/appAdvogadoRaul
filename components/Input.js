import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Input({ label, secure = false }) {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}
    >
      <Text style={{ width: 60 }}>{label}:</Text>
      <TextInput
        style={{
          flex: 1,
          backgroundColor: "#e6e6e6",
          padding: 8,
          borderRadius: 4,
          marginHorizontal: 8,
        }}
        editable={false}
        secureTextEntry={secure}
      />
      <Ionicons name="pencil" size={16} color="#C9A74B" />
    </View>
  );
}
