import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';

import Homescreen from './components/Homescreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Homescreen" 
          component={Homescreen}

          options={{title: "Headstore",
          headerRight: () => <Image
          style={styles.searchIcon}
          source={require('../AwesomeProject/assets/icons/search.png')}
          />}}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  searchIcon: {
    aspectRatio: 1/1,
    width: 30,
  },
});

/*
onPress={() =>
navigation.navigate('DetailScreen')}
*/