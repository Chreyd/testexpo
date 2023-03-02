import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App= ()=> {

  const getName = (firsName, secondName, tirdName, lastName )=>{
    return firsName +' '+ secondName+' '+ tirdName+ ' '+ lastName
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>je m'appelle {getName('LOLANGOY', 'MAPEBA', 'Fleudry','Chreyd')} </Text>

    </View>
  );
}
const styles=StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    },
    text:{
      fontSize: 40,
      color: '#FFF'
    },
    text2:{
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 2,
      color: '#FFF'

    },
    text3:{
      fontSize: 40,
      color: '#FFF'

    }
})

export default App;