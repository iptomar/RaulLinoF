import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//markers
import MarkerMyLocal from '../../data/img/views/mapa/currentPositionCircle.svg';
import MapItinerary from '../../data/img/views/mapa/itinerarioIcon.svg';
import MapHistory from '../../data/img/views/mapa/historiaOnClickIcon.svg';
import MarkersIt from './MarkersIt';
import MapView, { Marker, Callout  } from '@mvits/react-native-maps-osmdroid';
import MarkerIconYellow from '../../data/img/views/mapa/selectedMarker.svg';
//location stuff
import { PermissionsAndroid, Platform } from 'react-native';
import * as Permissions from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import itinerarios from '../itinerarios';

// css
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

// Calculates the distance between two coordinates using the haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      0.5 - Math.cos(dLat) / 2 +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      (1 - Math.cos(dLon)) / 2;

    const distanceInKm = R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
    const distanceInMeters = distanceInKm * 1000; // Distance in meters
    return distanceInMeters;
}

//Returns the id of closest building to the user
function getClosest(userlat, userlon){
    let distance = 10000000;
    let building;
    {itinerarios.map((item) => {
        let lat1 = item.coords[0];
        let lon1 = item.coords[1];
        let tempdist = getDistance(lat1,lon1,userlat,userlon);
        if(tempdist < distance){
            distance = tempdist;
            building = item.id;
        }
        
    })}
    console.log(building);
    
    return{building}
}
 export default function Map({ navigation }) {
    const [currentLocation, setCurrentLocation] = useState(false);
    const [historyClicked, setHistoryClicked] = useState(true);

    //for the buttons on the top right corner
    useEffect(() => {
        //...
      }, []);

    //permissoons for the location - granted or not?
    useEffect(() => {
        // Check if the App has permission to access the phone of the user location
        const checkLocationPermission = async () => {
            if (Platform.OS === 'android') {
                // Message to inform the user that the permission must be given on the phone if the users wants to see where he is on the map
                const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission Required',
                    message: 'This app requires access to your location.',
                },
                );
                // See if the permision was given to the Aoo to access the phone location
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission granted');
                } else {
                    console.log('Location permission denied');
                }
            }
            // Request requestAuthorization
             else if (Platform.OS === 'ios') {
                Geolocation.requestAuthorization();
            } 
        };
        // Check again if the user has given the permission to access the location
        checkLocationPermission();
       
    }, []);

    

    //get the current location of the phone
    useEffect(() => {
            
        const getCurrentLocation = async () => {
            try {
                // Get ther permission to access the location
                const granted = await PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (granted) {
                    // If the permissions were getActiveChildNavigationOptions, get the coordinates of the user's phone
                    Geolocation.getCurrentPosition(
                        position => {
                            setCurrentLocation({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                
                            });
                            getClosest(position.coords.latitude,position.coords.longitude)
                        },
                        //Log the error if it wasn't possible to get the location even with the permission
                        error => {
                            console.log('Error setting the location. Error:', error);
                        },
                        // precision of the GPS 
                        {enableHighAccuracy: false, timeout: 30000, maximumAge: 10000 },
                     
                );
                } else {
                //Log the error if the permissions weren't given by the user
                console.log('Location permission denied');
                }
            } catch (err) {
                // Catch ohter errors
                console.warn(err);
            }
            };
            //try to get the location again - after precision ends
            getCurrentLocation();
        }, []);

        // Check if the user pressed the button to see the history of the selected markers
        const handleHistoryPress = () => {
            setHistoryClicked((prevState) => !prevState);
        }

    return (
        <View style={{ height: '100%' }}>
            <MapView
                style={{height: '100%'}}
                initialRegion={getInitialState()}>
                {currentLocation && (
                    // Marker for the current location of the user
                    <Marker 
                        coordinate={currentLocation} 
                        title  ="My Location">
                        {/* Removed the log to see the location so the App isn't so slow */}
                       {/* {console.log("Minha localização: ",currentLocation)} */}
                       <MarkerIconYellow width="50" height="50" />
                    </Marker>
                )}
                {/* Markers from the "itenerarios.js" file */}
                <MarkersIt historyClicked={historyClicked} navigation={navigation}/>
            </MapView  >
            {/* on screen buttons */}
            {/* Button to see the current itinerary */}
            <TouchableOpacity style={styles.button}
                onPress={() => console.log('Button pressed - adicionar ao itinerario')}
                >
                <MapItinerary width="50" height="50" />
            </TouchableOpacity>
            {/* Button to see the History of the selected places */}
            <TouchableOpacity style={styles.button2}>
                <MapHistory width="50" height="50" onPress={handleHistoryPress}/>
            </TouchableOpacity>
        </View>
    );
}
 
