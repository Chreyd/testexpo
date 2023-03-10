import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonComponent = ({style, onPressHandler, btnTitle}) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.5}>
      <View style={{...styles.btn, ...style}}>
        <Text style={styles.btnText}>{btnTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "grey",
    padding: 9,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});

export default ButtonComponent;
