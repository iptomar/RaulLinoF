import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//markers
import MarkerMyLocal from '../../data/img/views/mapa/currentPositionCircle.svg';
import MapItinerary from '../../data/img/views/mapa/itinerarioIcon.svg';
import MapHistory from '../../data/img/views/mapa/historiaOnClickIcon.svg';
import MarkersIt from './MarkersIt';
import MapView, { Marker, Callout } from '@mvits/react-native-maps-osmdroid';
//location stuff
import { PermissionsAndroid, Platform } from 'react-native';
import * as Permissions from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';



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

 export default function Map({ navigation }) {
    const [currentLocation, setCurrentLocation] = useState(false);
    const [historyClicked, setHistoryClicked] = useState(true);

    //for the buttons on the top right corner
    useEffect(() => {
        //...
      }, []);

    //permissoons for the location - granted or not?
    useEffect(() => {
        const checkLocationPermission = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission Required',
                    message: 'This app requires access to your location.',
                },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission granted');
                } else {
                    console.log('Location permission denied');
                }
            } else if (Platform.OS === 'ios') {
                Geolocation.requestAuthorization();
            }
        };
    
        checkLocationPermission();
    }, []);

    //get the current location of the phone
    useEffect(() => {
        const getCurrentLocation = async () => {
            try {
                const granted = await PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (granted) {
                    Geolocation.getCurrentPosition(
                        position => {
                            setCurrentLocation({
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            });
                            console.log('Current Location:', currentLocation);
                        },
                        error => {
                            // console.log('Error setting the location. Error:', error);
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
                } else {
                console.log('Location permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
            };
        
            getCurrentLocation();
        }, []);

        const handleHistoryPress = () => {
            setHistoryClicked((prevState) => !prevState);
        }

    return (
        <View style={{ height: '100%' }}>
            <MapView
                style={{height: '100%'}}
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
                <MarkersIt historyClicked={historyClicked} navigation={navigation}/>
            </MapView  >
            {/* on screen buttons */}
            <TouchableOpacity style={styles.button}
                onPress={() => console.log('Button pressed')}
                >
                <MapItinerary width="50" height="50" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <MapHistory width="50" height="50" onPress={handleHistoryPress}/>
            </TouchableOpacity>
        </View>
    );
}
 
