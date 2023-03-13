import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TitleText from "./TitleText";
import AppStyles from "../constants/AppStyles";


const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <TitleText style={AppStyles.headerOne}>Liste de Courses</TitleText>
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
});


export default Header;
