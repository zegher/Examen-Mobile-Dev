import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button, FlatList, ImageBackground } from 'react-native';



console.log("CartScreen");
export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.winkwag}>Jouw wish-list!</Text>
        
    </View>
        
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'lightgreen',
      height: '100%',
    },
    winkwag: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15, 
    }
    
  });