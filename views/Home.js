import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Tomorrow_400Regular_Italic,
  Tomorrow_400Regular,
} from "@expo-google-fonts/dev";
import colors from "../assets/colors";
import EmailForm from "../components/EmailForm";
import Modal from "modal-enhanced-react-native-web";

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Tomorrow_400Regular_Italic,
    Tomorrow_400Regular,
  });

  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !modalVisible);

  const [showGears, setShowGears] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      console.log("hit timeout");
      setShowGears(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.HomeContainer}>
      <View style={styles.Subcontainer}>
        {showGears && (
          <Image
            source={require("../assets/gear2.gif")}
            style={{ width: 400, height: 400 }}
            resizeMode="contain"
          />
        )}
        {!showGears && (
          <>
            <Image
              source={require("../assets/J&D.png")}
              style={{ width: "100%", height: "90%" }}
              resizeMode={"contain"}
            />
            {/* <Button
          title="Contact Us"
          onPress={() => navigation.navigate("Contact")}
          color={colors.secondary}
        /> */}
            <Button
              title="Send Us An Email"
              onPress={() => {
                setModalVisible(true);
              }}
              color={colors.secondary}
            />
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={modalVisible || false}
              onRequestClose={() => {
                Alert.alert("Modal has now been closed.");
              }}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <View style={{ width: "50%" }}>
                <EmailForm modalVis={setModalVisible} />
              </View>
              <View style={{ padding: 20 }}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                  color={colors.secondary}
                />
              </View>
            </Modal>
          </>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HomeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  Title: {
    fontFamily: "Tomorrow_400Regular_Italic",
    fontSize: "3em",
    color: "white",
    textAlign: "center",
  },
  ProjectsContainer: {
    padding: 10,
  },
  Subcontainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 20,
    shadowRadius: 50,
    shadowOpacity: 0.5,
    flex: 0.9,
    width: "90%",
    height: "100%",
  },
  TextViews: {
    flex: 1,
    padding: "1em",
  },
});
