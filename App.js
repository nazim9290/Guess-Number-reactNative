import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header/Header";
import StartPage from "./Screens/StartPage";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
      <StartPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//rnfes=>react array components with styleSheet
//rnc => react native components
//rncs => react native components with stylesheet
//rns => react native stylesheeT
