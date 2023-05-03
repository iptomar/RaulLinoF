import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import itinerarios from '../Itinerarios';
import Geolocation from 'react-native-geolocation-service';
import MarkersIt from './MarkersIt';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';
import MarkerMyLocal from '../../data/img/views/mapa/currentPositionCircle.svg';


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
export default function Map({ navigation }) {
    const [currentLocation, setCurrentLocation] = useState(false);

    //get the current location of the phone
    useEffect(() => {
        Geolocation.getCurrentPosition(
        position => {
            setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            });
        },
        error => {
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    }, []);

    return (
        
        <MapView
            style={{height:"100%"}}
            initialRegion={getInitialState()}>
            {currentLocation && (
                <Marker 
                    coordinate={currentLocation} 
                    title="My Location"
                    >
                    <MarkerMyLocal width="50" height="50"/>
                </Marker>
            )}
            {/* Markers from the "itinerarios.js" file */}
            <MarkersIt />
        </MapView>
    );
}