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

        <Image style={{width:200,height:300}}  source={headphones.foto.gui}/>
        <Text style={styles.naam}>{headphones.title.rendered}</Text>
        <Text style={styles.besch}>{headphones.description}</Text>
        <Text style={styles.prijs}>€{headphones.prijs}</Text>
        <Text style={styles.score}>{headphones.review} &#11088; / 5 &#11088;</Text>
        <Button style={styles.knop} title="⇐ go bvack" onPress={() => navigation.goBack()}    
        
      

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
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    naam: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: -500,
      color: 'darkred',
    },
    score: {
      fontSize: 15,
      backgroundColor: 'lightgrey',
      fontWeight: 'light',
    },
    prijs: {
      fontSize: 25,
      backgroundColor: 'lightgrey',
      fontWeight: 'bold',
    },
    knop: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'left',
    },
    besch: {
      fontSize: 15,
    }
  });
