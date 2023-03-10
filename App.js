import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';

import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import Homescreen from './components/Homescreen';
import {CartScreen} from './screens/CartScreen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

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