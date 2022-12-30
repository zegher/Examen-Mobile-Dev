import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri } from 'react-native';


export default function Koptelefoon(props) {
    console.log("Weergeven koptelefoon werkt")
    return (
        <View style={styles.View}>
            <Image style={styles.foto} source={{uri: props.foto}}/>
            <Text style={styles.naam}>{props.naam}</Text>
            <Text style={styles.prijs}>€ {props.prijs}</Text>
            <Text>{props.review} &#11088; / 5 &#11088;</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    View: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
      borderColor: 'black',
      borderRadius: 20,
      borderWidth: 2,
      marginBottom: 5,
      marginTop: 5,
      backgroundColor: 'white'
    },
    foto: {
        height: 150, 
        aspectRatio: 1/1,
    },
    naam: {
      fontSize: 25,
    },
    prijs: {
      color: 'black',
      fontSize: 20,
    }
  });
  
  