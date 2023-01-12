import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button, FlatList } from 'react-native';
const Stack = createNativeStackNavigator();

import Koptelefoon from '../components/Koptelefoon';

const DetailScreen = ({ navigation }) => {    
    
  const [headphones, setHeadphones] = useState([]);


  const [isAppKlaar, SetIsAppKlaar] = useState(false);
  //const [filters, setFilters] = useState([]);
  const getHeadphones = async () => {
    try{
      const res = await fetch('https://zegher.be/wp-json/wp/v2/headphones/130');
      const json = await res.json();
      console.log(json);
      setHeadphones(json);
    }
    catch (err){
      console.log(err);
    }
    finally{
      SetIsAppKlaar(true);
    }
  }

  useEffect(() => {
    getHeadphones()
  }, [])

  return(
      
      <View style={styles.screen}>
        <Button style={styles.knop} title="go back" onPress={() => navigation.goBack()}    
      
      data={headphones}
      keyExtractor={item => item.id}
      

      renderItem={({item}) => 
      
        <Koptelefoon
          style={styles.koptelefoon}
          id = {item.id}
          foto = {item.foto.guid}
          naam = {item.title.rendered}
          prijs = {item.prijs}
          review = {item.review}
        />
      }
    />
      <Text>{headphones.title.rendered}</Text>
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
