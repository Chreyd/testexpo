import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


const Product = (props) => {
  return (
    <View style={styles.items}>
        <Text style={styles.element}>{props.name}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    items: {
      marginTop: 10,
    },
    element: {
      backgroundColor: "#ffb6c1",
      padding: 20,
      fontSize: 17,
      marginVertical: 6,
    },
  });

export default Product
