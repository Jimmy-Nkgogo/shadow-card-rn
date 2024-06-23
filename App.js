import React from "react";
import { StyleSheet, View } from "react-native";
import ImageComponent from "shadow-card-rn";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});

export default App;
