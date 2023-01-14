import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button, FlatList, ImageBackground } from 'react-native';

console.log("é");
export default function App() {
  return (
    <View>
      <Text style={styles.zoeken}>   Zoeken...</Text>

      <Text style={styles.stitle}>Suggesties</Text>
        <View style={styles.suggesties}>
          <Text style={styles.sug1}>Noise Cancelling</Text>
          <Text style={styles.sug2}>Zwarte kleur</Text>
          <Text style={styles.sug3}>Sony</Text>
          <Text style={styles.sug4}>Playstation</Text>
          <Text style={styles.sug5}>JBL</Text>
        </View>
        
    </View>
        
  );
}


  const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    zoeken: {
      fontSize: 30,
      fontWeight: 'bold',

      borderWidth: 2,
      borderRadius: 500,

      padding: 2,
      margin: 15,

      color: 'grey',
      backgroundColor: 'white',
    },
    stitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 15
    },
    sug1: {
      borderWidth: 1,
      borderRadius: 350,
      padding: 5,
    },
    sug2: {
      borderWidth: 1,
      borderRadius: 350,
      padding: 5,
    },
    sug3: {
      borderWidth: 1,
      borderRadius: 350,
      padding: 5,
    },
    sug4: {
      borderWidth: 1,
      borderRadius: 350,
      padding: 5,
    },
    sug5: {
      borderWidth: 1,
      borderRadius: 350,
      padding: 5,
    },
    
    suggesties: {
      flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-around",
    padding: 10,
    }
  });
