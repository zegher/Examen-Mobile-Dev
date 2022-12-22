import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri } from 'react-native';


export default function Koptelefoon(props) {
    console.log("Weergeven koptelefoon werkt")
    return (
        <View style={styles.View}>
            <Image style={styles.foto} source={{uri: props.foto}}/>
            <Text>{props.naam}</Text>
            <Text>€ {props.prijs}</Text>
            <Text>{props.review} &#11088;</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    View: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
    },
    foto: {
        height: 150, 
        aspectRatio: 1/1,
        borderWidth: 1,
        borderColor: 'black',
    }
  });
  
  