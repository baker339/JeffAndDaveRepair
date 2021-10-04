import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Tomorrow_400Regular_Italic,
  Tomorrow_400Regular,
} from "@expo-google-fonts/dev";

const ProjectsInclude = () => {
  let [fontsLoaded] = useFonts({
    Tomorrow_400Regular_Italic,
    Tomorrow_400Regular,
  });
  return (
    <View>
      <Text style={styles.ProjectList}>
        Projects Include But Are Not Limited To...
      </Text>
      <FlatList
        data={[
          "Power Washing",
          "Hedge Trimming",
          "Interior Painting",
          "Repaint Shutters, Lamp Posts, Mailboxes",
          "Minor Plumbing Jobs",
          "Minor Carpentry Jobs",
          "Gutter Cleaning & Gutter Guard Installation",
          "Changing Lightbulbs & Alarm Battery Replacement",
        ]}
        renderItem={({ item }) => (
          <Text style={styles.ProjectList}>- {item}</Text>
        )}
      />
    </View>
  );
};

export default ProjectsInclude;

const styles = StyleSheet.create({
  ProjectList: {
    fontFamily: "Tomorrow_400Regular_Italic",
    fontSize: "1rem",
    color: "white",
  },
});
