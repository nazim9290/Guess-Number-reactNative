import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const Inputext = (props) => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};

export default Inputext;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
  },
});
