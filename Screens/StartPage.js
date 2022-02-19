import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  keyboardType,
} from "react-native";
import React from "react";
import Card from "../components/Card/Card";
import Colors from "../constants/Colors";
import Inputext from "../components/input/Inputext";

const StartPage = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game !</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <Inputext
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Reset"
              onPress={() => {}}
              color={Colors.primary}
            />
            <Button
              style={styles.button}
              title="Confirm"
              onPress={() => {}}
              color={Colors.accent}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
  },
});
