import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button, Props, props } from 'react-native';
const Stack = createNativeStackNavigator();

import Koptelefoon from '../components/Koptelefoon';

const DetailScreen = ({ navigation }) => {    
    return(
      
      <View style={styles.screen}
      >
        
        <Text>Detailscherm</Text>
        <Button title="go back" onPress={() => navigation.goBack()}/>


        
      </View>
    )
  }


  export default DetailScreen;

  const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
  });
