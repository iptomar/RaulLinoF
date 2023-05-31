import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//markers
import MarkerMyLocal from '../../data/img/views/mapa/currentPositionCircle.svg';
import MapItinerary from '../../data/img/views/mapa/itinerarioIcon.svg';
import MapHistory from '../../data/img/views/mapa/historiaOnClickIcon.svg';
import MarkersIt from './MarkersIt';
import MapView, { Marker, Callout, Polyline } from '@mvits/react-native-maps-osmdroid';
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
                <Polyline coordinates={[
			{ latitude: 39.463440, longitude: -8.201998 },
			{ latitude: 39.463966, longitude: -8.200576 },
            { latitude: 39.463900, longitude: -8.200410 },
            { latitude: 39.464044, longitude: -8.199385 },
            { latitude: 39.463962, longitude: -8.199230 },
            { latitude: 39.463610, longitude: -8.198999 },
            { latitude: 39.463440, longitude: -8.198978 },
            { latitude: 39.463088, longitude: -8.198270 },
            { latitude: 39.462902, longitude: -8.197911 },
            { latitude: 39.462598, longitude: -8.198416 },
            { latitude: 39.462151, longitude: -8.198904 },
            { latitude: 39.461834, longitude: -8.199650 },
            { latitude: 39.461248, longitude: -8.199443 },
            { latitude: 39.461343, longitude: -8.198719 }
            ]} 
            strokeWidth={5} 
            strokeColor="#00FF00" 
            />
            <Polyline coordinates={[
			{ latitude: 39.461275, longitude: -8.198590 },
			{ latitude: 39.461804, longitude: -8.198046 },
            { latitude: 39.461439, longitude: -8.197273 },
            { latitude: 39.461791, longitude: -8.196777 },
            { latitude: 39.462100, longitude: -8.196195 },
            { latitude: 39.462572, longitude: -8.196343 },
            { latitude: 39.462591, longitude: -8.196302 },
            { latitude: 39.463454, longitude: -8.196737 },
            { latitude: 39.463814, longitude: -8.196968 },
            { latitude: 39.464200, longitude: -8.197190 },
            { latitude: 39.464500, longitude: -8.197402 },
            { latitude: 39.465117, longitude: -8.197818 }
            ]} 
            strokeWidth={5} 
            strokeColor="#00FF00" 
            />
            <Polyline coordinates={[
			{ latitude: 39.463932, longitude: -8.200645 },
			{ latitude: 39.463985, longitude: -8.200482 },
            { latitude: 39.464439, longitude: -8.199279 },
            { latitude: 39.464228, longitude: -8.198771 },
            { latitude: 39.464082, longitude: -8.198384 },
            { latitude: 39.464076, longitude: -8.197974 },
            { latitude: 39.464252, longitude: -8.197625 },
            { latitude: 39.464439, longitude: -8.197333 }
            ]} 
            strokeWidth={5} 
            strokeColor="#00FF00" 
            />
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
 
