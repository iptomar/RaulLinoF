import * as React from 'react';
import { View, Text,useEffect, useState, PermissionsAndroid, StyleSheet} from 'react-native';
// import {requestForegroundPermissionsAsync} from 'expo-location';
import { ImagePropTypes, TextPropTypes } from 'deprecated-react-native-prop-types';
import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import itinerarios from '../itinerarios';
import MarkerIcon from '../../data/img/views/mapa/marker.svg';
import { isReturnStatement } from 'typescript';

//css
const styles = StyleSheet.create({
    bubble: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
    },
    bubble_text: {
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'FiraSans-Regular',
        color: '#272133',
    }
});
// Returns the initial map state (Abrantes)
function getInitialState() {
    return {
        latitude: 39.4680,
        longitude: -8.1965,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
}

// Returns the number of buildings
function numItinerarios(){
    return itinerarios.dados.length;
}

// Sets a Map Marker of a building
function setMarker(coordinate, title, description){

}

// Loads all buildings into Markers
function loadItinerarios(){
    for(let i=0; i<numItinerarios(); i++){
        
    }
}

 /////   Joao Localiçao 
 const userLocation = async() =>{
    let {status} = await location.requestForegroundPermissionsAsync();
     if (status !== 'granted'){
            Error('acesso negado');
            return;

   }
   let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setMapRegion ({
		latitude: location.coords.latitude,
         longitude:location.coords.longitude,
		 latitudeDelta: 0.0922,
		 longitudeDelta: 0.0421,

       });
       console.log(location.coords.longitude, location.coords.latitude);

 }

 // Ruben penso que o probelma esta aqui pois se tiver isto comentado  nao me da erro  
 ///   useEffect(() => {
   ///     userLocation();
   ///   },[])


/////////   ate qui joao 




export default function Map({ navigation }) {

    // async function requestLocationPermissions(){
    //  const {granted} = await  requestLocationPermissions();
    // }

    return (
        
        <MapView
            style={{flex:1}}
            initialRegion={getInitialState()}>

            {itinerarios.map((item) => {
                return(
                    <Marker
                        key={item.id}
                        coordinate={{latitude: item.coords[0], longitude: item.coords[1]}}
                        showCalloutPress
                        // anchor={{x: 0.5, y:0.5}}  
                        // onPress={() => navigation.navigate('Detalhes', {itemID: item.id})}  
                    >
                        <MarkerIcon width="50" height="50"/>
                        <Callout
                            style={styles.bubble}
                            tooltip={true}
                            title="Test"
                            description="test">
                            <Text>Something</Text>
                        </Callout>
                    </Marker>
                    
                );
            })}
        </MapView>
    );
}