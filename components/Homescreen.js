import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import Koptelefoon from '../components/Koptelefoon';
//import Filter from '../components/Filter';

 function Homescreen({navigation}){ // changed

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
    <View style={styles.container}>

      <FlatList 
      ListHeaderComponent={
        <Text style={styles.header1}>Hoofdtelefoons</Text>
      }


      style={styles.flatlist}
      data={headphones}
      keyExtractor={item => item.id}
      
      /*renderItem={({item}) => 
        <Filter 
          merk = {item.merk}
        />
      }*/

      renderItem={({item}) => 
      
        <Koptelefoon 
          style={styles.koptelefoon}

          id = {item.id}
          foto = {item.foto.guid}
          naam = {item.title.rendered}
          prijs = {item.prijs}
          review = {item.review}
          onReadMore = {(id) => navigation.navigate('Details', { key: id })} // changed
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
    padding: 20,
  },
  header1: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 20,
    paddingLeft: 15,
    backgroundColor: 'lightgreen',
    paddingTop: 15,
    marginTop: -0,
  },
  flatlist: {
    width: '100%',
    alignContent: 'center',
  },
});
