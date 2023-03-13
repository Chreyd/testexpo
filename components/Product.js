import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";

const Product = ({ name, deleteProduct, idString }) => {
  return (
    <Pressable onPress={() => deleteProduct(idString)}>
      <View style={styles.items}>
        <FontAwesome name="remove" size={30} color={colors.white} />
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    backgroundColor: colors.danger,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  element: {
    padding: 20,
    fontSize: 17,
    marginLeft: 20,
    color: colors.white,
  },
});

export default Product;
