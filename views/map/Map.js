import * as React from 'react';
import { View, Text,useEffect, useState, PermissionsAndroid } from 'react-native';
// import {requestForegroundPermissionsAsync} from 'expo-location';
import { ImagePropTypes, TextPropTypes } from 'deprecated-react-native-prop-types';


import MapView, {Marker} from '@mvits/react-native-maps-osmdroid';
import itinerarios from '../../data/json/itinerarios.json';
import markerIcon from '../../data/img/views/mapa/marker.svg';

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
            <Marker
                // ^ Marker de Teste
                coordinate={{latitude: 39.461152, longitude: -8.199535}}
                title={"Rua Luís de Camões"}
                description={"Rua Luís de Camões, nº 28"}
                anchor={{ x: 0.5, y: 0.5 }}
                // NOTA: Icons/images não aceitam svgs :')
                // TODO: Converter SVGs em PNGs manualmente ou por uma biblioteca
                //icon={require={markerIcon}}
            />
        </MapView>
    );
}