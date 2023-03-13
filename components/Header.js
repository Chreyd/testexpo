import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TitleText from "./TitleText";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TitleText style={styles.logo}>Liste de Courses</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "darkred",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    paddingTop: 25,
    paddingBottom: 15,
  },
  logo: {
    color: "#fff",
    //fontWeight: 'bold',
    fontFamily: 'pacifico-Regular',
    // fontFamily: 'BangersRegular',
  },
});


export default Header;
