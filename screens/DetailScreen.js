import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button, FlatList } from 'react-native';
const Stack = createNativeStackNavigator();

import Koptelefoon from '../components/Koptelefoon';

const DetailScreen = ({ navigation }) => {    
    
  const [headphones, setHeadphones] = useState([]);
  //const [filters, setFilters] = useState([]);
  const getHeadphones = async () => {
    try{
      const res = await fetch('https://zegher.be/wp-json/wp/v2/headphones');
      const json = await res.json();
      console.log(json);
      setHeadphones(json);
    }
    catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    getHeadphones()
  }, [])

  return(
      
      <View style={styles.screen}>
        <FlatList 
      ListHeaderComponent={
        <Button title="go back" onPress={() => navigation.goBack()}/>    
      }


      style={styles.flatlist}
      data={headphones}
      keyExtractor={item => item.id}
      

      renderItem={({item}) => 
      
        <Koptelefoon 
          style={styles.koptelefoon/1}
          onReadMore = {(id) => navigation.navigate('Details', { key: id })} // changed
        />
      }
    />

      <StatusBar style="auto" />
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
