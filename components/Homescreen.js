import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';

import Koptelefoon from '../components/Koptelefoon';
//import Filter from '../components/Filter';

 function Homescreen({navigation}){ // changed

  const [headphones, setHeadphones] = useState([]);

  //const wishList = [];
  const [wish, setWish] = useState([]);
  console.log(wish)

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
        <View style={styles.bheader}>
            <Text style={styles.header1}>Hoofdtelefoons</Text>
            
            <TouchableHighlight
              onPress={() => navigation.navigate('Wishlist', {wishListItems: addToWishlist})}>
              <Image
              style={styles.cartIcon}
              source={require('../assets/cart.png')}
              />
            </TouchableHighlight>

            <TouchableHighlight
            onPress={() => navigation.navigate('Search')}>
              <Image
              style={styles.searchIcon}
              source={require('../assets/icons/search.png')}
              />
            </TouchableHighlight>
            

        </View>
        
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
          addToWishlist = {item => setWish(prev => [...prev, item])}
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
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bheader: {
    flexDirection: "row",
    marginVertical: 3,
    justifyContent: "space-around",
  },
  header1: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 20,
    marginTop: -0,
  },
  flatlist: {
    width: '100%',
    alignContent: 'center',
  },
  searchIcon: {
    height: 30,
    width: 30,
    paddingTop: -15,
  },
  cartIcon: {
    height: 35,
    width: 35,
    paddingTop: -15,
    marginLeft: 150,
  }
  
});
