import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, uri, Button } from 'react-native';


export default function Koptelefoon(props) {
    console.log("Weergeven koptelefoon werkt")
    return (
        <View style={styles.View}>
            <Image style={styles.foto} source={{uri: props.foto}}/>
            <Text style={styles.naam}>{props.naam}</Text>
            <Text style={styles.prijs}>€ {props.prijs}</Text>
            <Text>{props.review} &#11088; / 5 &#11088;</Text>
            <Text style={styles.kopen}>Koop deze +</Text>

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

      paddingTop: 15,
      paddingBottom: 40,
      
      backgroundColor: 'white',

    },
    foto: {
        height: 125, 
        aspectRatio: 1/1,
        marginTop: 20,
    },
    naam: {
      fontSize: 25,
    },
    prijs: {
      color: 'black',
      fontSize: 20,
    },
    knop: {
      backgroundColor: 'black',
    },
    kopen: {
      alignContent: "flex-end",
    }
  });
  
  