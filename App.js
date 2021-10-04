import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, usseState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Home from "./views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactUs from "./views/ContactUs";
import "semantic-ui-css/semantic.min.css";
import colors from "./assets/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{
    //         headerStyle: {
    //           backgroundColor: colors.accent,
    //         },
    //         headerTintColor: "transparent",
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Contact"
    //       component={ContactUs}
    //       options={{
    //         headerStyle: {
    //           backgroundColor: colors.accent,
    //         },
    //         headerTintColor: "black",
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
      <Home />
    </>
  );
}

const styles = StyleSheet.create({});
