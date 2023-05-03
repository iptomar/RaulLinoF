import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
import itinerarios from '../Itinerarios';
import Geolocation from 'react-native-geolocation-service';
import MarkersIt from './MarkersIt';
import MarkerMyLocal from '../../data/img/views/mapa/currentPositionCircle.svg';
import MapItinerary from '../../data/img/views/mapa/itinerarioIcon.svg';
import MapHistory  from '../../data/img/views/mapa/historiaOnClickIcon.svg';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        right: 0,
        backgroundColor: '#272133',
        padding: 10,
        borderRadius: 5,
    },
    button2: {
        position: 'absolute',
        top: 80,
        right: 0,
        backgroundColor: '#272133',
        padding: 10,
        borderRadius: 5,
    },
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

    //for the button on the top right corner
    useEffect(() => {
        //...
      }, []);

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
        <View style={{ flex: 1 }}>
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
                {/* Markers from the "itenerarios.js" file */}
                <MarkersIt />
            </MapView>
            {/* on screen buttons */}
            <TouchableOpacity style={styles.button}
                onPress={() => console.log('Button pressed')}
                >
                <MapItinerary width="50" height="50" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}
                onPress={() => console.log('Button pressed')}
                >
                <MapHistory width="50" height="50" />
            </TouchableOpacity>
        </View>
    );
}
