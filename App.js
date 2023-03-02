import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counter}> {count} </Text>
      <Button title="+1" onPress={()=>setCount(count +1)} />
      <Button color="#840000" title="-1" onPress={()=>setCount(count -1)} />
    </View>                                                                                                                                                                                                                                                                                                                                                                     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter:{
    fontSize: 120,
  },


});
