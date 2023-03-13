import { StyleSheet, Text } from "react-native";
import React from "react";
import AppStyles from "../constants/AppStyles";

const BodyText = ({ children, style }) => {
  const { textBody } = AppStyles;
  return <Text style={{...textBody, ...style}} > {children} </Text>;
};

const styles = StyleSheet.create({});
export default BodyText;
