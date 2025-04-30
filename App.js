import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CreateProcessScreen from "./screens/CreateProcessScreen";
import ListProcessScreen from "./screens/ListProcessScreen";
import UpdateProcessScreen from "./screens/UpdateProcessScreen";
import AccountFormScreen from "./screens/AccountFormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AccountForm">
        <Stack.Screen name="AccountForm" component={AccountFormScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="CreateProcess"
          component={CreateProcessScreen}
          options={{ title: "Novo Processo" }}
        />
        <Stack.Screen
          name="ListProcess"
          component={ListProcessScreen}
          options={{ title: "Processos" }}
        />
        <Stack.Screen
          name="UpdateProcess"
          component={UpdateProcessScreen}
          options={{ title: "Atualizar Processo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
