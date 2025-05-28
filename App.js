import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateProcessScreen from "./screens/CreateProcessScreen";
import ListProcessScreen from "./screens/ListProcessScreen";
import UpdateProcessScreen from "./screens/UpdateProcessScreen";
import HomeScreenPublic from "./screens/HomeScreenPublic";
import SingleProcessScreen from "./screens/SingleProcessScreen";
import Sobre from "./screens/Sobre";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreenPublic} />
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
        <Stack.Screen name="SingleProcess" component={SingleProcessScreen} />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: "Sobre o App" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
