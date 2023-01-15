import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button, Flatlist, ImageBackground } from 'react-native';


export default function App({ navigation, route, wish}){
  
  //const  wish = route.params;
  
  //console.log(wish, "test");
  return (
    <View style={styles.container}>

      <View style={styles.heder}>
        <Image style={styles.cartIcon} source={require('../assets/cart.png')}/>
        <Text style={styles.winkwag}>Jouw wish-list!</Text>
      </View>
        
        <Flatlist
          data={wish}
          renderItem={({item}) => 
            <Text>{item.title.rendered}</Text>
        }
        />
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
    },
    heder: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginVertical: 15,
      marginLeft: 15,
      width: '100%',
    },
    cartIcon: {
      height: 35,
      width: 35,
      marginTop: 10,
    }
    
  });