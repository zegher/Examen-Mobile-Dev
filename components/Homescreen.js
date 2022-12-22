import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import Koptelefoon from '../components/Koptelefoon';

 function Homescreen(){

  const [headphones, setHeadphones] = useState([]);
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
    <View style={styles.container}>

      <FlatList 
      ListHeaderComponent={
        <Text style={styles.header1}>Hoofdtelefoons</Text>
      }
      style={styles.flatlist}
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

      <StatusBar style="auto" />
    </View>

  )
 }



export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 20,
    paddingLeft: 15,
    backgroundColor: 'lightgrey',
    paddingTop: 15,
    marginTop: -0,
  },
  flatlist: {
    width: '100%',
    alignContent: 'center',
  },
});
