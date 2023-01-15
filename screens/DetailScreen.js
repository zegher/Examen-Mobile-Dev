import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button, FlatList, ImageBackground } from 'react-native';
const Stack = createNativeStackNavigator();

import Koptelefoon from '../components/Koptelefoon';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const DetailScreen = ({ navigation, route }) => {    
    
  const [headphones, setHeadphones] = useState([]);
  const { key } = route.params;

  const [isAppKlaar, SetIsAppKlaar] = useState(false);
  //const [filters, setFilters] = useState([]);
  const getHeadphones = async () => {
    try{
      const res = await fetch('https://zegher.be/wp-json/wp/v2/headphones/' + key);
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

  if (isAppKlaar === false) {
    return null;
  }

  console.log(headphones.foto.gui);
  return(
      
      <View style={styles.screen}>
        <Text style={styles.naam}>{headphones.title.rendered}</Text>
        <Image style={styles.foto} source={{uri: headphones.foto.guid}}/>
        <Text style={styles.besch}>{headphones.description}</Text>
        <Text style={styles.prijs}>€{headphones.prijs}</Text>
        <Text style={styles.score}>{headphones.review} &#11088; / 5 &#11088;</Text>
        <Button style={styles.knop} title="⇐ go back" onPress={() => navigation.goBack()}    
        
      

      renderItem={({item}) => 
      
        <Koptelefoon
          style={styles.koptelefoon}
          id = {item.id}
          foto = {item.foto.guid}
          naam = {item.title.rendered}
          prijs = {item.prijs}
          review = {item.review}
          description = {item.description}
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
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 15,
    },
    naam: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      backgroundColor: 'lightgreen',
      borderRadius: 350,
      width: '100%',
      padding: 5,
    },
    foto: {
      height: 380, 
      aspectRatio: 1/1,
      padding: 5,
    },
    score: {
      fontSize: 15,
      fontWeight: 'light',
      backgroundColor: 'white',
      alignSelf: 'center',
      padding: 10,
    },
    prijs: {
      fontSize: 25,
      fontWeight: 'bold',
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 10,
        paddingBottom: 5,
    },
    besch: {
      fontSize: 15,
      backgroundColor: 'white',
      fontStyle: 'italic',
    },
    knop: {
      alignSelf: 'center',
    }
  });
