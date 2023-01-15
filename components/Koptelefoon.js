import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';


export default function Koptelefoon(props) {
    console.log("Weergeven koptelefoon werkt")
    return (
        <View style={styles.View}>
            <Image style={styles.foto} source={{uri: props.foto}}/>
            <Text style={styles.naam}>{props.naam}</Text>
            <Text style={styles.prijs}>€ {props.prijs}</Text>
            <Text>{props.review} &#11088; / 5 &#11088;</Text>
            <Text style={styles.kopen}>Voeg toe aan wishlist</Text>

            <Button style={styles.knop}
            title='Read More'
            onPress={() => props.onReadMore(props.id)} // Changed
            />
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
      marginTop: 15,

      padding: 40,
      
      backgroundColor: 'white',

    },
    foto: {
        height: 110, 
        aspectRatio: 1/1,
        marginTop: 30,
    },
    naam: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    prijs: {
      color: 'black',
      fontSize: 20,
    },
    knop: {
      underlayColor: 'black',
      marginBottom: 15,
    },
    kopen: {
      alignContent: "flex-end",
      borderWidth: 1,
      borderRadius: 35,
      padding: 2,
      color: 'white',
      backgroundColor: 'black',
      fontWeight: 'bold',
      margin: 5,
    }
  });
  
  