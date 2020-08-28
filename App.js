import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function App() {
  return (
    // No.1
    <View style={styles.container}>
      <View style={styles.detailedContainer}>
        <TextInput placeholder="Type something!" style={styles.textInput} />
        <Button title="ADD" />
      </View>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
    </View>
  );
}

// No.1
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 50,
  },
  detailedContainer: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: "center",
  },
  textInput:{
    borderColor: 'black',
    borderWidth: 1,
  },
  logo:{
    position: "absolute",
    alignSelf: 'flex-end',
    right: 10,
    bottom: 10,
    width: 89.3,
    height: 74.4,
  },
});

// // No.2
// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     padding: 50,
//   },
//   detailedContainer:{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: "center",
//   },
//   textInput:{
//     width: '80%',
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 10,
//   },
//   logo:{
//     position: "absolute",
//     alignSelf: 'flex-end',
//     right: 10,
//     bottom: 10,
//     width: 89.3,
//     height: 74.4,
//   },
// });
