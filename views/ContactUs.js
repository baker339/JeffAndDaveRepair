import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Tomorrow_400Regular_Italic,
  Tomorrow_400Regular,
} from "@expo-google-fonts/dev";
import EmailForm from "../components/EmailForm";

// URL for how to do email
// https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3

const ContactUs = () => {
  let [fontsLoaded] = useFonts({
    Tomorrow_400Regular_Italic,
    Tomorrow_400Regular,
  });

  return (
    <ScrollView>
      <View style={styles.HomeContainer}>
        <Text style={styles.Title}>For Questions Or Free Estimates</Text>
        <Text style={styles.Title}>Please Contact</Text>
        <View style={styles.ProjectsContainer}>
          <Text style={styles.ProjectList}>(207) 649-8010</Text>
          <Text style={styles.ProjectList}>or</Text>
          <Text style={styles.ProjectList}>(201) 919-3027</Text>
        </View>
      </View>
      <View style={styles.ProjectsContainer}>
        <EmailForm />
      </View>
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  HomeContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontFamily: "Tomorrow_400Regular_Italic",
    fontSize: "2em",
    textAlign: "center",
  },
  ProjectsContainer: {
    padding: 50,
    alignItems: "center",
  },
  ProjectList: {
    fontFamily: "Tomorrow_400Regular_Italic",
    fontSize: "1em",
  },
});
