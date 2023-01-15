import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';

import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import Homescreen from './components/Homescreen';
import CartScreen from './screens/CartScreen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const Wishlist = () => {    
  const WL = [];  

  const [headphones, setHeadphones] = useState([]);

  //const [filters, setFilters] = useState([]);
  const getHeadphones = async () => {
    try{
      const res = await fetch('https://zegher.be/wp-json/wp/v2/headphones/' + key);
      const json = await res.json();
      console.log(json);
      setHeadphones(json);
    }
    catch (err){
      console.log(err + "array");
    }
    finally{
      SetIsAppKlaar(true);
    }
  }
  useEffect(() => {
    getHeadphones()
  }, [])
}

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Homescreen" 
          component={Homescreen}

          options={{title: "Nieuwe stock headsets!"}}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailScreen} 
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Wishlist"
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
onPress={() =>
navigation.navigate('DetailScreen')}
*/